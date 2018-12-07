const express = require('express');
const path = require('path');
const app = express();
const port = '0725';
const route = require('./route');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/',express.static(path.join(__dirname,'static/img')));
app.use('/',express.static(path.join(__dirname,'static')));


app.use('/', route);

app.use((req,res,next) => {
    res.status(404).send('일치하는 주소가 없습니다!');
})
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('server error!')
});

app.listen(port, () => {
    console.log(`Express App on port ${port}`);
})