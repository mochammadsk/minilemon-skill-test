import { Application, Router } from 'express';
import user from '../controllers/user.controller';
import { validateUser } from '../middlewares/validation.middleware';

export default (app: Application): void => {
  const router = Router();

  // Create user
  router.post('/create', validateUser, user.createUser);

  // Get user
  router.get('/get', user.getUser);

  // Update user by id
  router.put('/update/:id', validateUser, user.updateUser);

  app.use('/user', router);
};
