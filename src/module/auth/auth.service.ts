import { HydratedDocument } from 'mongoose';
import {LoginDto} from './auth.dto'
import {Ilogin} from './auth.entity'
import { IUser } from '../../common/enum/Interface/user.interface';
import userModel from '../../model/user.Model';
class AuthService{
    constructor() {}
   async login(info: LoginDto):Promise<Ilogin>{
    const user: HydratedDocument<IUser> |null = await userModel.findOne(info);
    if(!user){
        return { message: "User not found"};
    }
    return { message: "Login successful"};
    }
   async registration(info: IUser): Promise<Ilogin> {
    const user : HydratedDocument<IUser> = await userModel.create(info);

    return { message: "Registration successful" };
}
async getprofile(userID:string):Promise<Ilogin>{
    const user = await userModel.findById(userID);
    if(!user){
        return { message: "User not found" };
    }
    return { message: "Profile retrieved successfully" };
}
async getAllUsers():Promise<Ilogin>{
    const users = await userModel.find();
    return { message: "Users retrieved successfully" };
}
}