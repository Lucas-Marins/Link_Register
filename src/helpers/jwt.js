require('dotenvv').config();
const jwt = require('jsonwebtoken');

const tokenPrivateKey = process.env.JWT_REFREH_TOKEN_PRIVATE;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_TOKEN_PRIVATE;

const options = {expiresIn: '30 minutos'};
const refreshOptions = {expiresIn: '30 days'};

const generateJwt = (payload) =>{
    return jwt.sign(payload, tokenPrivateKey, options)
};

const generateRefreshjJwt = (payload) =>{
    return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions)
};

const verifyJwt = (token) =>{
    return jwt.verify(token, tokenPrivateKey)
};

const verifyRefreshJwt = (token) =>{
    return jwt.verify(token, refreshTokenPrivateKey)
};

module.exports = {generateJwt, verifyJwt,generateRefreshjJwt,verifyRefreshJwt};