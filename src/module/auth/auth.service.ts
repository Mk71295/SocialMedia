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
   async registration(info: IUser): Promise<HydratedDocument<IUser>> {
    const user : HydratedDocument<IUser> = await userModel.create(info);

    return user;
}
async getprofile(userID:string):Promise<HydratedDocument<IUser>>{
    const user = await userModel.findById(userID);
    if(!user){
        throw new Error("User not found");
    }
    return user;
}
async getAllUsers():Promise<HydratedDocument<IUser>[]>{
    const users = await userModel.find();
    return users;
}
}
export default new AuthService(); //one copy of class