
import User from "../model/user-schema.js";

export const usersign = async ( request, response) => {
     try{

          const exist = await User.findOne({ email: request.body.email });
          if(exist) {
            return response.status(401).json({ message: ' Email already exist'})
          }

          const exist1 = await User.findOne({ phone: request.body.phone });
          if(exist1) {
            return response.status(401).json({ message: ' Email already exist'})
          }

          const user = request.body;
          const newUser = new User(user);
          await newUser.save();

          response.status(200).json({ message: user });
     }catch(error){
          response.status(500).json({message: error.message });
     }
}


export const userLogin = async (request, response) => {
     try{
          const email = request.body.email;
          const password = request.body.password;

          let user = await User.findOne({ email: email, password: password});
          if(user){
               return response.status(200).json({ data: user});
          }  
          else{
               return response.status(401).json('Error', error.message);
          }
     }catch(error){
          response.status(500).json({message:error.message});
     }
}

