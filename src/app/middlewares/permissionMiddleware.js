import User from '../models/User';

export default async function adminPermission(req, res, next) {
  const admin = await User.findOne({
    where: {
      id: req.userId,
      admin: true,
    },
  });

  if (!admin) {
    return res.status(401).json({ error: 'User is not Admin' });
  }

  return next();
}
