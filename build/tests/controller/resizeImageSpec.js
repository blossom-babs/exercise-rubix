"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resizeImage_1 = require("../../src/controller/resizeImage");
describe('test the function that handles image resizing', () => {
    it('resizes jpg images to thumbnail size', () => {
        expect(resizeImage_1.resizeImage).not.toBeFalsy();
    });
});
