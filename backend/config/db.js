import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.set("strictQuery", false);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Conected: ${conn.connection.name}`)
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}

export default connectDB;