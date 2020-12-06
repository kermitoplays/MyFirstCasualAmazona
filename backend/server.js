import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

/*want to create an express server */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//conver to req.body in node
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://kermitoplays:realpass@cluster0.tks4g.mongodb.net/amazona",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders",orderRouter);
app.get("/", (req, res) => {
  /*handler that accept req and res */
  res.send(
    "server is ready"
  ); /*when open server it shows: server is ready , we respond*/
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
