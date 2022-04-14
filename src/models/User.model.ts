import { Document, model, Schema } from "mongoose";

interface UserModel extends Document, User { }

const UserSchema = new Schema<UserModel>({
  firstName: { type: String },
  lastName: { type: String },
  readNotificationIDs: { type: [String], default: [] },
});

export default model<UserModel>('User', UserSchema);
