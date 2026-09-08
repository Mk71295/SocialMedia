"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gender_enum_1 = require("../common/enum/gender.enum");
const role_enum_1 = require("../common/enum/role.enum");
const noInfo = "!no data enter";
const userschema = new mongoose_1.Schema({
    First_Name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
        required: true // 💡 تصحيح required
    },
    Last_Name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    UserName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
        required: false, // 💡 تصحيح required
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true // 💡 يفضل تحويل الإيميل لسمول دائماً
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
        required: true
        // 💡 تم إزالة maxlength لتجنب مشاكل الـ Hashing
    },
    address: {
        type: String,
        trim: true,
        default: noInfo
    },
    phone: {
        type: String,
        minlength: 11,
        maxlength: 11,
        required: true
    },
    age: {
        type: Number,
        min: 10,
        max: 100
    },
    profile_image: {
        type: String,
        default: noInfo
    },
    confirmEmail: {
        type: Boolean,
        default: false // 💡 تصحيح default
    },
    gender: {
        type: String,
        enum: Object.values(gender_enum_1.gender),
        default: gender_enum_1.gender.male
    },
    role: {
        type: String,
        enum: Object.values(role_enum_1.role),
        default: role_enum_1.role.user // 💡 تصحيح default
    }
}, {
    timestamps: true,
    strict: true,
    strictQuery: true,
    versionKey: "version",
    collection: "messagedata",
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true }
});
// 💡 تصحيح الـ Virtual Property
userschema.virtual("fullname").get(function () {
    return `${this.First_Name} ${this.Last_Name}`;
});
const userModel = (0, mongoose_1.model)("User", userschema);
exports.default = userModel;
