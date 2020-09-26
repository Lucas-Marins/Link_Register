const {getMessage} = require('./messages')
const getValidatorError = (error, messagePath) =>{
    if(!error) return null;

    const erroMessages = {};
    error.details.map((detail)=>{
        const message = detail.message
        const type = detail.type
        const key = detail.context.key
        const path = `${messagePath}.${key}.${type}`;

        const customMessage = getMessage(path);
        if(!customMessage){
            console.log("CustomMessage not found for path", path)
        }
        erroMessages[key] = getMessage(path) || message;
    });

    return erroMessages;
    
};

module.exports = {getValidatorError, getMessage}