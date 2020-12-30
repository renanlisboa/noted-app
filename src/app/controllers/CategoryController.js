import * as Yup from 'yup';

import User from '../models/User';
import Category from '../models/Category';
import Group from '../models/Group';

class CategoryController {
  async index(req, res) {
    const categories = await Category.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'name', 'created_at', 'updated_at'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Group,
          as: 'group',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(categories);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const category = await Category.findOne({ where: { name: req.body.name } });

    if (category) {
      return res.status(400).json({ error: 'Category already exists.' });
    }

    const newCategory = await Category.create(req.body);
    newCategory.user_id = req.userId;
    await newCategory.save();

    return res.json(newCategory);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(400).json({ error: 'Category not found.' });
    }

    const updatedCategory = await category.update(req.body);

    return res.json(updatedCategory);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(400).json({ error: 'Category not found.' });
    }

    await category.destroy();

    return res.status(204).send();
  }
}

export default new CategoryController();
