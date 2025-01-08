import { Application, Router } from 'express';
import user from '../controllers/user.controller';
import { validateUser } from '../middlewares/validation.middleware';

export default (app: Application): void => {
  const router = Router();

  // Create user
  router.post('/create', validateUser, user.createUser);

  app.use('/user', router);
};
