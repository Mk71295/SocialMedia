    import { model, Schema } from "mongoose";
    import { gender } from "../../enum/gender.enum";
    import { role } from "../../enum/role.enum";
export interface IUser {
        First_Name:String,
        Last_Name:String,
        UserName:String,
        Email:String,
        Password:String,
        Address?:String,
        phone:String,
        Age?:Number,
        profile_image?:String,
        confirmEmail?:Boolean,.
        gender?:gender
    }