const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const exerciseRouter = require('./route/exercise');
const userRouter = require('./route/user');
const cors = require('cors');
const MongoDBStore = require('connect-mongodb-session')(session);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const store = new MongoDBStore({
  uri: uri,
  collection: 'userSessions'
});

mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("MongoDB connected");
})

app.use(cors());
app.use(express.json());
app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);
app.use(session({
  secret: process.env.SESSION_SERCRET,
  cookie:{
    maxAge: 1000*60*60*24
  },
  store: store,
  resave:false,
  saveUninitialized: false
}));
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
