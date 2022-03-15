"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImages = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
fs_1.default.mkdirSync('./assets/resized', { recursive: true }); // create folder for resized images
// get files to be edited
const images = [];
fs_1.default.readdir('./assets/original', (err, files) => {
    if (err) {
        throw new Error(`${err}`);
    }
    else {
        files.forEach((file) => {
            images.push(`./assets/original/${file}`);
        });
    }
});
const resizeImages = (req, res, next) => {
    if (images.length > 1) {
        images.map((item) => {
            const filenameArr = item.split('/');
            const filename = filenameArr[filenameArr.length - 1];
            (0, sharp_1.default)(item).resize(200, 200).toFile(`./assets/resized/${filename}`);
        });
    }
    next();
};
exports.resizeImages = resizeImages;
