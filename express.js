
import express from 'express';
var app = express();

app.use('/bridge', express.static('build'))
app.listen(9900);
console.log('Web Server on 9900');

