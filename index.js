// const express = require("express");
import express from "express";
const app = express();
import { connectDB } from "./config/db.js";
import statusRouter from "./routes/status.route.js";


// (async () => {
//     await connectDB();
// })();

connectDB();


app.use('/api', statusRouter);
app.use('/',(req, res)=>{
    res.send('Hello World');
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server Listening on port...${PORT}`)
})