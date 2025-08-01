import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDatabase.js';
import testRoute from './routes/testRoute.js'; 
//___ config ___
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//__ middleware config ___
app.use(morgan('dev')); 
app.use(express.json());

//___ database connection ___
connectDB();

//___ API routes ___
app.use('/api', testRoute);

//___ Server connection ___
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});