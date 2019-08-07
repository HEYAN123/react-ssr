const express = require("express");

const app = express()

app.get('/list', function(req, res) {
    res.send(
        {
            code: 0,
            data: [
                'apple',
                'pear'
            ]
        }
    );
});

app.listen(3001, ()=>{
    console.log('listen 3001');
})