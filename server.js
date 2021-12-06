const path = require('path');
const express = require('express');

const app = express(__dirname + 'dist/frontend');
app.use(express.static());

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/dist/frontend/index.html'))
});

app.listen(process.env.PORT || 500);
