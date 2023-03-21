const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const { route }=require('./routers/router.js');

app.use('/todo',route);
app.listen(11501,()=>{
    console.log("server is running");
});