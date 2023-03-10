//import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

//import routes
import postRoutes from './routes/posts.js';
// import userRoutes from './routes/users.js';

//initial app that we can use all the methods
const app = express();

dotenv.config();

//set up bodyParser to send request properly.
app.use(bodyParser.json({limit: "30mb", extended: true})); //make sure when we send image, send with limited size.
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
// app.use('/users', userRoutes);


//connect to database
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true); //remove deprication warnings
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err));