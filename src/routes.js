import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CategoryController from './app/controllers/CategoryController';
import GroupController from './app/controllers/GroupController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.post('/groups', GroupController.store);
routes.get('/groups', GroupController.index);
routes.put('/groups/:id', GroupController.update);
routes.delete('/groups/:id', GroupController.delete);

export default routes;
