"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_controller_1 = __importDefault(require("./app.controller"));
const serverPort = process.env.port;
(0, app_controller_1.default)().listen(serverPort, () => {
    console.log(`server runnig in port ${serverPort}`);
});
