const enrutadorUsers= require('./../controladores/user.controler.js')

const Router=(server)=>{
  console.log(" enrutador afuera carpeta")
  server.use('/',enrutadorUsers)
}
module.exports = Router
