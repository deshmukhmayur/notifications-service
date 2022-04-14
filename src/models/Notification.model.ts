import { Document, model, Schema } from 'mongoose';

interface NotificationModel extends Document, Notif { }

const NotificationSchema = new Schema<NotificationModel>({
  payload: {
    type: String,
    set: JSON.stringify,
    get: JSON.parse,
    default: '{}',
  },
  notificationType: { type: String, enum: ['PULL', 'PUSH', 'EMAIL'], default: Notif.Type.EMAIL },
  subscriptionID: { type: String, required: true },
  createdOn: { type: Date, default: () => new Date() },
  expiresOn: { type: Date },
});

export default model<NotificationModel>('Notification', NotificationSchema);
