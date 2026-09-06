"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_Model_1 = __importDefault(require("../../model/user.Model"));
class AuthService {
    constructor() { }
    async login(info) {
        const user = await user_Model_1.default.findOne(info);
        if (!user) {
            return { message: "User not found" };
        }
        return { message: "Login successful" };
    }
    async registration(info) {
        const user = await user_Model_1.default.create(info);
        return { message: "Registration successful" };
    }
    async getprofile(userID) {
        const user = await user_Model_1.default.findById(userID);
        if (!user) {
            return { message: "User not found" };
        }
        return { message: "Profile retrieved successfully" };
    }
    async getAllUsers() {
        const users = await user_Model_1.default.find();
        return { message: "Users retrieved successfully" };
    }
}
