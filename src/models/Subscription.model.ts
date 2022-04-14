import { Document, model, Schema } from 'mongoose';

interface SubsciptionModel extends Document, Subscription { }

const SubscriptionSchema = new Schema<SubsciptionModel>({
  content: { type: String, default: '' },
  contentType: {
    type: String,
    enum: [
      'POST',
      'COMMENT',
    ],
  },
  action: {
    type: String,
    enum: [
      'NEW',
      'UPDATE',
      'DELETE',
    ],
  },
  actor: { type: String },
})

export default model<SubsciptionModel>('Subscription', SubscriptionSchema)
