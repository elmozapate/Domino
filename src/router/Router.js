const enrutadorUsers=require('../controladores/user.controler.js')

const Router=(server)=>{
  console.log( " entro a router ")
  server.use('/test',(req,res)=>{
    console.log(" test",req.body)
                  res.status(201).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
  })
  server.use('/usuarios',enrutadorUsers)
}
module.exports = Router
