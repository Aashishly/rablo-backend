const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {

    try {
        let token = req.header.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.userId = user.id;
        }
        else{
           return res.status(400).json({message : "unathorized User"})
        }

        next();

    } catch (error) {
        console.log(error);
    }
}


module.exports = auth;