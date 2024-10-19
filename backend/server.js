const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const crudUserRoutes = require('./routes/crudUser');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json({
  limit : "1gb",
  extended : true,
}))

app.use(bodyParser.urlencoded({
  extended : true,
}))

app.use(express.json({
  extended : true,
}))

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true 
}));

app.use('/user',userRoutes);

app.use('/cruduser',crudUserRoutes);

app.use('/', (req ,res)=>{

  res.send('server is Up and runnig 6600')
  
})


mongoose.connect(process.env.DBURL).then(()=>{

  app.listen(process.env.PORT ,()=>{
    console.log("DB Connected successfully");
    console.log('SErver is Started is prort 6600');
    
  })

}).catch((err)=>{
  console.log(err.message);
  
});

