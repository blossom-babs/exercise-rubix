"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
it('expects textEditor to return a string', function () {
    expect((0, index_1.textEditor)('The movie that just came out is a phenomenal movie')).toEqual('The film that just came out is a phenomenal film');
});
