import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import { Product } from "./model/Product";
import { v4 as uuidv4 } from "uuid";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Start the server
const port = Number(process.env.PORT || 3030);
app.listen(port, () => {
  console.log("Express server started on port: " + port);
});

let products: Product[] = [
  {
    id: "ad062e4b-3000-436c-b0f3-5856fb37a262",
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
  },
  {
    id: "1d27aff3-fcf9-42ef-8d50-0765a4438589",
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
  },
  {
    id: "96f90e8a-cc50-4702-a672-9bea47299c63",
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
  },
  {
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
    id: "4d5a9258-c622-4f06-98aa-28b91ddb06f8",
  },
  {
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
    id: "ac3f2704-a46f-47c1-a15c-b24ea5f76df0",
  },
  {
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
    id: "e01964d9-5f3c-4ad8-950d-bba52a322dac",
  },
  {
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
    id: "76cea652-4a73-400b-b4a7-6574bea076ed",
  },
  {
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
    id: "37c26d6c-2a78-4919-993f-e458759ccd7e",
  },
  {
    name: "Iphone X",
    price: 5000000,
    salePrice: 4000000,
    images: ["https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png"],
    id: "a4575a22-30f9-407d-9552-c5c5b3727262",
  },
];

app.get("/product/:id", function (req, res) {
  const product = products.find((item) => item.id === req.params.id);
  if (!product)
    res
      .status(404)
      .send({ message: `product with id ${req.params.id} is not exist` });
  res.status(200).send(product);
});

// get all
app.get("/product", function (req, res) {
  res.status(200).send(products);
});

app.post("/product", function (req, res) {
  const product: Product = req.body;
  product.id = uuidv4();
  products.push(product);
  res.send(product);
});

app.put("/product", function (req, res) {
  const product: Product = req.body;
  const existedProduct = products.find((item) => item.id == product.id);
  if (!existedProduct)
    res
      .status(404)
      .send({ message: `product with id ${product.id} is not exist` });
  products = products.map((item) => (item.id == product.id ? product : item));
  res.send(product);
});

app.delete("/product/:id", function (req, res) {
  const id = req.params.id;
  const existedProduct = products.find((item) => item.id == id);
  if (!existedProduct)
    res.status(404).send({ message: `product with id ${id} is not exist` });

  products = products.filter((item) => item.id != id);
  return res
    .status(200)
    .send({ message: `delete product with id ${id} success` });
});
