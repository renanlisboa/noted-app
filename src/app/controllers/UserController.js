import * as Yup from 'yup';
import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import User from '../models/User';
import File from '../models/File';
import Category from '../models/Category';
import Group from '../models/Group';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async show(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: ['id', 'name', 'email', 'created_at', 'updated_at'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'url'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Group,
          as: 'group',
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    if (req.body.email && req.body.email !== user.email) {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (
      req.body.oldPassword &&
      !(await user.checkPassword(req.body.oldPassword))
    ) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const file = await File.findByPk(req.body.avatar_id);

    if (!file) {
      return res.status(400).json({ error: 'File not found.' });
    }

    const { id, name, email, avatar_id } = await user.update(req.body);

    return res.json({ id, name, email, avatar_id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const userAvatar = await File.findOne({
      where: { user_id: req.userId },
    });

    if (userAvatar) {
      promisify(fs.unlink)(
        resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', userAvatar.path)
      );

      await userAvatar.destroy();
    }

    await user.destroy();

    return res.status(204).send();
  }
}

export default new UserController();
