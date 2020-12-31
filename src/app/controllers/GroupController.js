import * as Yup from 'yup';

import User from '../models/User';
import Category from '../models/Category';
import Group from '../models/Group';

class GroupController {
  async index(req, res) {
    const groups = await Group.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'name', 'created_at', 'updated_at'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(groups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      category_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    const category = await Category.findByPk(req.body.category_id);

    if (!category) {
      return res.status(400).json({ error: 'Category not found.' });
    }

    const group = await Group.findOne({ where: { name: req.body.name } });

    if (group) {
      return res.status(400).json({ error: 'Group already exists.' });
    }

    const newGroup = await Group.create(req.body);
    newGroup.user_id = req.userId;
    await newGroup.save();

    return res.json(newGroup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      category_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    if (req.body.category_id) {
      const category = await Category.findByPk(req.body.category_id);

      if (!category) {
        return res.status(400).json({ error: 'Category not found.' });
      }
    }

    const group = await Group.findByPk(req.params.id);

    if (!group) {
      return res.status(400).json({ error: 'Group not found.' });
    }

    const updatedGroup = await group.update(req.body);

    return res.json(updatedGroup);
  }

  async delete(req, res) {
    const group = await Group.findByPk(req.params.id);

    if (!group) {
      return res.status(400).json({ error: 'Group not found.' });
    }

    await group.destroy();

    return res.status(204).send();
  }
}

export default new GroupController();
