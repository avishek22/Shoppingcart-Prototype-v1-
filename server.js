require('./models/db');
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const orderController=require('./controllers/orderController');
const bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:`${__dirname}/views/`
}));
app.set('view engine','hbs');

let port=process.env.PORT;
if(port==null||port==""){
    port=3000;
}
app.listen(port,()=>{
    console.log('Server started');
});
app.use('/',orderController);