"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../../src"));
const supertest_1 = __importDefault(require("supertest"));
const router_1 = __importDefault(require("../../src/routes/router"));
src_1.default.use('/', router_1.default);
describe('tests the routes endpoint', () => {
    it('tests index endpoint', () => {
        const request = (0, supertest_1.default)(router_1.default);
        const response = request.get('/');
        expect(response).not.toBeFalsy();
    });
});
