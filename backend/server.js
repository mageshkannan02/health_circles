const express=require('express')
const bodyParser = require('body-parser');
const app=express()
const port=4000
const routes=require('./src/router/router')
app.use(bodyParser.json());
app.use(express.json());


 
app.use('/health',routes)



app.listen(port,()=>{
    console.log(`App is listening in ${port}`);
    
})