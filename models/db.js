const mongoose=require('mongoose');

mongoose.connect('',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Database Connected');
    }
    else{
        console.log(err)
    }
});

require('./order.model');
