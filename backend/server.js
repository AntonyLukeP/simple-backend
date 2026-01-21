const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Phone",
    price: 20000
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000
  }
];

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.get("/products", (req,res)=>{
    res.json(products)
})



const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})