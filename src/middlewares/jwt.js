const {verifyJwt} = require('../helpers/jwt')

const checkJwt = (req, res ,next) =>{
    
    const {url: path } = req;

    const excludedPaths = ['/auth/sign-in', '/auth/sign-up'];
    const isExcluded = excludedPaths.find(p=> p.startsWith(path))
    if(isExcluded) return next();

    let token = req.headers['authorization'];
    token  = token ? token.slice(7 , token.lenght): null;
    if(!token){
        return res.jsonUnauthorized(null, 'Invalid token');
    }

    try{
        const decoded = verifyJwt(token)
        req.accontId = decoded.id;
        next();
    }catch{
        return res.jsonUnauthorized(null, 'Invalid token');
    }
  
};

module.exports = checkJwt