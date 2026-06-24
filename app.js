const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('DevOps Assignment Success Satish Bandi');
});

app.listen(3000,()=>{
    console.log('Started');
});