"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
var logger = function (req, res, next) {
    if ((req.params.id = 'secure')) {
        res.redirect('/api/admin');
        next();
    }
};
app.get('/:id', logger, function (req, res) {
    res.send('this is the entry page');
});
app.get('/api/admin', function (req, res) {
    res.send('this is the secure route');
});
app.listen(port, function () { return console.log('server is live on port', port); });
exports.default = app;
