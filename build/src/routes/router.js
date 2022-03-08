"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeImage_1 = require("../controller/resizeImage");
const routes = express_1.default.Router();
routes.get('/', resizeImage_1.resizeImages, (req, res) => {
    console.log('the result is from the router file', resizeImage_1.resizeImages);
    res.status(200).send('this is the router');
});
exports.default = routes;
