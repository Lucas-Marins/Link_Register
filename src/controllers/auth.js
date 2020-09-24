const express = require('express');
const {Account} = require('../models')
const bcrypt = require('bcrypt');
const router = express.Router();

const saltRounds = 10;

router.get('/sign-in',(req,res) =>{
    return res.json('Sign in');
})

router.get('/sign-up',async (req,res)=>{

    const email = 'lmarins02@hotmail.com.br'
    const password ='123456'

    const hash  = bcrypt.hashSync(password, saltRounds)

    const result = await Account.create({email,password:hash})
    console.log(hash)
    
  return res.json(result)
})

module.exports = router