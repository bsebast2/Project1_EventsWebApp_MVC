//require modules
const express=require('express');
const morgan=require('morgan');

//create  app
const app=express();


//configure app
let port=3000;
let host='localhost';

app.set('view engine','ejs');

//mount middleware
app.use(express.static('public'));//show static files
app.use(express.urlencoded({extended:true}));//upload data from URL
app.use(morgan('tiny'));//records req and res in terminal


//set up routes
app.get('/',(req,res)=>{
    res.render('index');
});

//start the server
app.listen(port,host,()=>{ console.log('Server is rnning on port',port);})
