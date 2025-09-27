import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";


const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`mongodb connected ${conn.connection.host}`);
    } catch (error) {
        throw error
    }
}

export{
    connectDb
}