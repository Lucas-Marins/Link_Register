const express = require('express');
const {Account} = require('../models')
const bcrypt = require('bcrypt');
const router = express.Router();
const {accountSignUp, accountSignIn} = require('../validators/account');
const {getMessage} = require('../helpers/validatior');
const {generateJwt, generateRefreshjJwt} = require('../helpers/jwt')

const saltRounds = 10;

router.post('/sign-in',accountSignIn, async (req,res) =>{
   const { email,password } = req.body;
    const account = await Account.findOne({where:{email}})

    //Validar a senha
    const match = account? bcrypt.compareSync(password, account.password) : null
    if(!match) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

    return res.jsonOK(account,getMessage('account.signin.success'),{token, refreshToken});
})

router.post('/sign-up', accountSignUp, async (req,res) => {
    const { email,password } = req.body;

    const account = await Account.findOne({ where: {email} });
    if(account) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

    const hash  = bcrypt.hashSync(password, saltRounds)
    const newAccount = await Account.create({ email, password:hash });

    const token = generateJwt({id: account.id})
    const refreshToken = generateJwt({id: account.id})
 
    
  return res.jsonOK(newAccount, getMessage('account.signup.success'), {token,refreshToken});
})

module.exports = router;