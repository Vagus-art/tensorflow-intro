const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//routes
app.get('/scripts/tfjs',(req,res)=>res.sendFile(__dirname + '/node_modules/@tensorflow/tfjs/dist/tf.min.js'));
app.get('/scripts/tfjs-vis',(req,res)=>res.sendFile(__dirname + '/node_modules/@tensorflow/tfjs-vis/dist/tfjs-vis.umd.min.js'));
app.use('/',express.static(__dirname));

//server start
app.listen(port,()=>console.log(`Server is working on port ${port}`));