const enrutadorUsers=require('../controladores/user.controler.js')
const authControler=require('../controladores/auth.controler.js')

const Router=(server)=>{
  console.log( " entro a router ")  
  server.use('/auth',authControler)
  server.use('/usuarios',enrutadorUsers)
}
module.exports = Router
