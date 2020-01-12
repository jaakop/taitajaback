var express = require('express')
var router = express.Router()

router.post('/', (req, res) =>{
    for(let i = 0; i < tokens.length; i++){
        if(req.body.token === tokens[i].token){
            let date = Date.now() - tokens[i].date;
            if(date/1000/60/60 < 2)
            res.status(200).end();
            else{
                tokens.splice(i);
                res.status(498).end();
            }
            return;
        }
    }
    res.status(499).end();
});

module.exports = router;