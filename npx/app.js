let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// 暗号化モジュール
let crypto = require("crypto");

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// 暗号化アルゴリズム
let cipers = crypto.getCiphers();
console.log(cipers);

// ハッシュアルゴリズム
let hashes = crypto.getHashes();
console.log(hashes);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);






var planeText = 'This is Plane Text';
var passowrd = 'passw0rd';

console.log('暗号化するテキスト : ' + planeText);
console.log('暗号化キー        : ' + passowrd);

// 暗号化
var cipher = crypto.createCipher('aes192', passowrd);
cipher.update(planeText, 'utf8', 'hex');
var cipheredText = cipher.final('hex');

console.log('暗号化(AES192) :');
console.log(cipheredText);

// 復号
var decipher = crypto.createDecipher('aes192', passowrd);
decipher.update(cipheredText, 'hex', 'utf8');
var dec = decipher.final('utf8');

console.log('復号化(AES192) : ');
console.log(dec);










module.exports = app;
