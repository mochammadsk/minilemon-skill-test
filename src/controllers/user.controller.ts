import { Request, RequestHandler, Response } from 'express';
import User from '../models/user.model';

/* Create User */
const createUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Find if user already exist by email
    const existUser = await User.findOne({ email: req.body.email });

    // Check if user already exist by email
    if (existUser) {
      res.status(400).json({ message: 'User already exist' });
      return;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(req.body.email)) {
      res.status(400).json({ message: 'Invalid email' });
      return;
    }

    const telpRegex = /^\d{10,}$/;
    if (!telpRegex.test(req.body.telp)) {
      res.status(400).json({ message: 'Telp number must be 10 digit' });
      return;
    }

    // Create user data
    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

export default { createUser };