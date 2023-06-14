import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

// And a schema that knows about IUserMethods
const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // timestamp
  }
)

export const User = model<IUser, UserModel>('User', userSchema)
