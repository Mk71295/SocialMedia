    import { model, Schema } from "mongoose";
    import { gender } from "../../enum/gender.enum";
    import { role } from "../../enum/role.enum";
export interface IUser {
        First_Name:string,
        Last_Name:string,
        UserName:string,
        Email:string,
        Password:string,
        Address?:string,
        phone:string,
        Age?:number,
        profile_image?:string,
        confirmEmail?:boolean,
        gender?:gender
    }