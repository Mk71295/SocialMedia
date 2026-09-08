import{Request, Response} from "express";
import  AuthService  from "./auth.service";
export const signup = async (req: Request, res: Response): Promise<Response> => { // promise<Response> is the return type of the function
    try{
const data = req.body;
const result=await AuthService.registration(data);
        return res.status(201).json({ message: "User created successfully", user: result });
    }
    catch(error){
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
        
    
}
};
//signin


