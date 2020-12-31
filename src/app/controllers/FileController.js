import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import File from '../models/File';

class FileController {
  async store(req, res) {
    const prevFile = await File.findOne({
      where: { user_id: req.userId },
    });

    if (prevFile) {
      promisify(fs.unlink)(
        resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', prevFile.path)
      );

      await prevFile.destroy();
    }

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    file.user_id = req.userId;
    await file.save();

    return res.json(file);
  }

  async delete(req, res) {
    const file = await File.findByPk(req.params.id);

    if (!file) {
      return res.status(400).json({ error: 'File not found.' });
    }

    promisify(fs.unlink)(
      resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', file.path)
    );

    await file.destroy();

    return res.status(204).send();
  }
}

export default new FileController();
