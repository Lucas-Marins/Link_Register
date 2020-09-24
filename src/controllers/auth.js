const express = require('express');

const router = express.Router();

router.get('/sign-in',(req,res) =>{
    return res.json('Sign in');
})

router.get('/sign-up',(req,res)=>{
    return res.json('Sign out')
})

module.exports = router