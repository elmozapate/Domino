const enrutadorUsers=require('../controladores/user.controler.js')

const Router=(server)=>{
  console.log( " entro a router ")
  server.use('/test',(req,res)=>{
    console.log(" test",req)
                  res.status(400).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
  })
  server.use('/',enrutadorUsers)
}
module.exports = Router
