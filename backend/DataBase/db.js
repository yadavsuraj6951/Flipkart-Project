import mongoose from "mongoose";


export const Connection = async (username, password) => {
    try{
    await mongoose.connect(`mongodb+srv://${username}:${password}%4011@flipkart-web.oq7cv.mongodb.net/Flipkart-Web`);
          console.log('Database connected Successsfully');
    }catch (error) {
        console.log('Error while connecting database', error.message);
    }
}

export default Connection