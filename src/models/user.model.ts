import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  telp: string;
  status: boolean;
  department: string;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    telp: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    department: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('user', userSchema);
