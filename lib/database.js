import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const multerData = async () => {
    try {
        await mongoose.connect(process.env.MULTER_DATABASE);
        console.log(`Mongoose Connected Successfully..!`);
    } catch (error) {
        console.error({ message: error.message });
        process.exit(1);
    }
}

export default multerData