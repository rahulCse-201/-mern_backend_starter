import mongoose from 'mongoose';


const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
        console.log(`\n MONGODB CONNECTED!! Host: ${connectionInstance.connection.host} \n`);
    }catch(err){
        console.log(err);
        process.exit(1); // why ? 
    }
}


export default connectDB;