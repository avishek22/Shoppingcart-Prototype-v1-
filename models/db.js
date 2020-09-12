const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin-avi:test123@cluster0.az29v.mongodb.net/ecommerceOrders',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Database Connected');
    }
    else{
        console.log(err)
    }
});

require('./order.model');