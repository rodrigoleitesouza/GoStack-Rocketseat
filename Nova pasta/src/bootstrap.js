import dotenv from 'dotenv/config';

dotenv.path({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
