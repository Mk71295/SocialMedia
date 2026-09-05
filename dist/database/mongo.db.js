"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const databaseConnect = async () => {
    const url = process.env.Database_url;
    try {
        await mongoose_1.default.connect(url, {
            maxPoolSize: process.env.MaxPoolSize // بتاخد عدد العمليات اللي تعملها في وقت واحد            
        });
        console.log("✅ Databse connection sucessfully");
    }
    catch (connectionFalid) {
        console.log("❎ Error in connection", connectionFalid);
    }
};
exports.databaseConnect = databaseConnect;
