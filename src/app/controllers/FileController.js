import User from '../models/User';
import File from '../models/File';

class FileController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
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
}

export default new FileController();
