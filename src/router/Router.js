const enrutadorUsers=require('../controladores/user.controler.js')

const Router=(server)=>{
  server.use('/',enrutadorUsers)
}
module.exports = Router
