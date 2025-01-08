import { Request, Response, NextFunction } from 'express';

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { email, telp } = req.body;

  // Regex untuk validasi email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    res.status(400).json({ message: 'Invalid email format!' });
    return;
  }

  // Regex untuk validasi nomor telepon
  const telpRegex = /^\d{10,}$/;
  if (!telp || !telpRegex.test(telp)) {
    res
      .status(400)
      .json({ message: 'Telp number must be numeric and at least 10 digits!' });
    return;
  }

  next();
};
