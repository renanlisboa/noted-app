import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/authMiddleware';
import permissionMiddleware from './app/middlewares/permissionMiddleware';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CategoryController from './app/controllers/CategoryController';
import GroupController from './app/controllers/GroupController';
import NoteController from './app/controllers/NoteController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', permissionMiddleware, UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/files', upload.single('file'), FileController.store);
routes.delete('/files/:id', FileController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/groups', GroupController.index);
routes.post('/groups', GroupController.store);
routes.put('/groups/:id', GroupController.update);
routes.delete('/groups/:id', GroupController.delete);

routes.get('/notes', NoteController.index);
routes.post('/notes', NoteController.store);
routes.get('/notes/:id', NoteController.show);
routes.put('/notes/:id', NoteController.update);
routes.delete('/notes/:id', NoteController.delete);

export default routes;
