import express from "express";
import dotenv,{config} from "dotenv"
dotenv.config()
import app from "./app.controller"
const serverPort =process.env.port
app().listen(serverPort, () => {
    console.log(`server runnig in port ${serverPort}`)
})
