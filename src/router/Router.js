const enrutadorUsers=require('../controladores/user.controler.js')

const Router=(server)=>{
  console.log( " entro a router ")
  server.use('/',enrutadorUsers)
}
module.exports = Router
