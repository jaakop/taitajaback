var express = require('express')
var router = express.Router()

router.post('/', (req, res) =>{
    if(!req.body.username || !req.body.password){
        res.status(401).end();
        return;
    }
    if(req.body.username === 'reksi' && req.body.password === 'reksi'){
        require('crypto').randomBytes(48, function(err, buffer) {
            let token = buffer.toString('hex');
            tokens.push({username: 'reksi', token: token, date: Date.now()});
            res.status(200);
            res.send({token:token});
          });
        return;
    }
    else{
        res.status(401).end();
        return;
    }
});

module.exports = router;