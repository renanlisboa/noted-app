import * as Yup from 'yup';

import User from '../models/User';
import Group from '../models/Group';
import Note from '../models/Note';

class NoteController {
  async index(req, res) {
    const notes = await Note.findAll({
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

    return res.json(notes);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      group_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    const group = await Group.findByPk(req.body.group_id);

    if (!group) {
      return res.status(400).json({ error: 'Group not found.' });
    }

    const note = await Note.findOne({ where: { name: req.body.name } });

    if (note) {
      return res.status(400).json({ error: 'Note already exists.' });
    }

    const newNote = await Note.create(req.body);
    newNote.user_id = req.userId;
    await newNote.save();

    return res.json(newNote);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      group_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed validation.' });
    }

    if (req.body.group_id) {
      const group = await Group.findByPk(req.body.group_id);

      if (!group) {
        return res.status(400).json({ error: 'Group not found.' });
      }
    }

    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(400).json({ error: 'Note not found.' });
    }

    const updatedNote = await note.update(req.body);

    return res.json(updatedNote);
  }

  async delete(req, res) {
    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(400).json({ error: 'Note not found.' });
    }

    await note.destroy();

    return res.status(204).send();
  }
}

export default new NoteController();
