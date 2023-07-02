const express = require('express');
const connectMongoDB = require('./connection');
const Product = require('./models/Product');
const productsRoute = require('./routes/products');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./middleware/auth');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8000;
connectMongoDB(process.env.MONGO_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


app.use('/users', userRouter);
app.use('/api/products', productsRoute);

app.use('/featured', async (req, res) => {
  try {
    const featuredProducts = await Product.find({ featured: true });
    res.json(featuredProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
