// import jwt from 'jsonwebtoken';
// import { promisify } from 'util';

// import authConfig from '../../config/auth';

export default async (req, res, next) => {
  // VALIDATIONS GOES HERE

  try {
    return next();
  } catch (err) {
    return res.json();
  }
};
