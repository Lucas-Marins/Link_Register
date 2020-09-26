const {verifyJwt} = require('../helpers/jwt')

const checkJwt = (req, res ,next) =>{
    let token = req.headers['authorization'];
    token  = token ? token.slice(7 , token.lenght): null;
    if(!token){
        return res.jsonUnauthorized(null, 'Invalid token');
    }

    try{
        const decoded = verifyJwt(token)
        req.accontId = decoded.id;
    }catch{
        return res.jsonUnauthorized(null, 'Invalid token');
    }
  
};

module.exports = checkJwt