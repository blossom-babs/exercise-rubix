"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.resizeImages = void 0;
const sharp_1 = __importDefault(require("sharp"));
const images = [
    './assets/original/encenadaport.jpeg',
    './assets/original/fjord.jpeg',
    './assets/original/icelandwaterfall.jpeg',
    './assets/original/palmtunnel.jpeg',
    './assets/original/santamonica.jpeg',
];
const resizeImages = (req, res, next) => {
    images.map((item) => {
        const filename = item.split('/').find((el) => el.endsWith('jpeg'));
        (0, sharp_1.default)(item)
            .resize(200, 200)
            .toFile(`./assets/edited/${filename}-${Date.now()}.jpeg`);
    });
    next();
};
exports.resizeImages = resizeImages;
const resizeImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const transformer = (0, sharp_1.default)('./assets/original/encenadaport.jpeg')
        .resize(200, 200)
        .toFile('./assets/edited/encenadaport.jpeg', (err) => console.log(err));
    return transformer;
});
exports.resizeImage = resizeImage;
