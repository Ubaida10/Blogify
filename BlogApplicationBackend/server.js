import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from "./Routes/blogRoutes.js";

dotenv.config({ path: './config.env' });
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use('/api/blogs', blogRoutes);




mongoose.connect(process.env.DB_URL).
    then(()=>{
        console.log("Database connected successfully");
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }).
    catch((error)=>{
        console.error("Database connection failed:", error);
        process.exit(1);
    })