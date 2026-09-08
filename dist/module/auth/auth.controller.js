"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const auth_service_1 = __importDefault(require("./auth.service"));
const signup = async (req, res) => {
    try {
        const data = req.body;
        const result = await auth_service_1.default.registration(data);
        return res.status(201).json({ message: "User created successfully", user: result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.signup = signup;
//signin
