import { Document, model, Schema } from 'mongoose';

interface SubscriberMapModel extends Document, SubscriberMap { }

const SubscriberMapSchema = new Schema<SubscriberMapModel>({
  userID: { type: String },
  subscriptionID: { type: String },
  frequency: { type: String },
  enabled: { type: Boolean, default: true },
});

export default model<SubscriberMapModel>('SubscriberMap', SubscriberMapSchema);
