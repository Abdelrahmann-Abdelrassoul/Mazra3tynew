import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import passport from 'passport';
import './config/passport.js';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import authRouter from './routes/authRoutes.js';

const app = express();
const port = 3000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => console.log('Server started on PORT: ' + port));
