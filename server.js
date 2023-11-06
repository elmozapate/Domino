const express = require('express');
st Router=require('./src/router/Router.js')
const PORT = process.env.PORT || 3001;
const server = express()

server.use( express.json())
Router(server)

server.listen(PORT, () => {
  console.log("Servidor activo, escuchando en el puerto ",PORT)
    
})
