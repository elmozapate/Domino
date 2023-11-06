const enrutadorUsers=require('../controladores/user.controler.js')

const Router=(server)=>{
  server.use('/users',enrutadorUsers)
}
module.exports = Router
