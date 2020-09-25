const express = require('express');
const {Account} = require('../models')
const bcrypt = require('bcrypt');
const router = express.Router();
const {accountSignUp} = require('../validators/account');
const {getMessage} = require('../helpers/validatior');

const saltRounds = 10;

router.get('/sign-in',(req,res) =>{
    return res.json('Sign in');
})

router.get('/sign-up', accountSignUp, async (req,res) => {
    const { email,password } = req.body;

    const account = await Account.findOne({ where: {email} });
    if(account) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

    const hash  = bcrypt.hashSync(password, saltRounds)
    const newAccount = await Account.create({ email, password:hash });

    
  return res.jsonOK(newAccount, getMessage('account.signup.success'));
})

module.exports = router;