import dotenv from 'dotenv';
import http from 'http';
import mongose from 'mongoose';
import app from './index';

dotenv.config();

mongose
  .connect(process.env.URI as string)
  .then(() => console.log('Connected to Database'))
  .catch((error) => {
    console.log('Failed connect to database', error);
    process.exit(1);
  });

const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
