const express = require("express");

const app = express();

app.get('/api/list', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
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
// 静态资源启用 http://localhost:3001/api/list.json
// app.use(express.static('public'));

app.listen(3001, ()=>{
    console.log('listen 3001');
})