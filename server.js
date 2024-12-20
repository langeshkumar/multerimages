import express from "express"
import dotenv from "dotenv"
import multerData from "./lib/database.js";
import mulRouter from "./Router/multerimage.route.js";
dotenv.config();

const app = express();

// port config in env 
const PORT = process.env.SERVER_PORT;

// sample route and controller 
app.get("/", (req, res) => {
    res.json({ msg: "This is old get response..!" });
});

// use router middleweare
app.use('/multer', mulRouter);

// database connection 
multerData();

// ready to server 
app.listen(PORT, () => {
    console.log(`Server is getting ready to http://localhost:${PORT}`);
});