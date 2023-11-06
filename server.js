const express = require('express');
const cors = require('cors');
const app = express();
const http = require("http").Server(app)
const { MongoClient, ServerApiVersion } = require('mongodb');
const { json } = require('body-parser');


const Router=require('./router/Router.js')
const PORT = process.env.PORT || 3001;
app.use(cors());
Router(app)

http.listen(PORT, () => {
  console.log("Servidor activo, escuchando en el puerto ",PORT)
    
})
