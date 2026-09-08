import userRouter from "./module/auth/auth.routing"
import Express from "express"
import dotenv,{config} from "dotenv"
import {databaseConnect} from "./database/mongo.db"

export const app= ()=>{
    dotenv.config()
    databaseConnect()
    
const api = Express()
api.use(Express.json())
api.use("/auth",userRouter )
return api
}
export default app