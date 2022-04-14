import { config } from 'dotenv-safe';
config();

export const { PORT } = process.env;

export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/notifications-service';
