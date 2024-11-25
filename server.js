import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express();

// port config in env 
const PORT = process.env.SERVER_PORT;

// sample route and controller 
app.get("/", (req, res) => {
    res.json({ msg: "This is get response..!" });
});

// ready to server 
app.listen(PORT, () => {
    console.log(`Server is getting ready to http://localhost:${PORT}`);
});