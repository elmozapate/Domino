const express=require('express')
const router=express.Router()
const ServiciosUsuarios= require('../servicios/user.servicios.js');
const serviciosUsuarios=ServiciosUsuarios.obtenerInstancia()
const EnrutadorUsers=()=>{
    console.log("enrutamiento")
    router.get('/crear',(req,res)=>{
    console.log("crear")
        if (!req.body) {
          return( 
              res.status(400).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
           )
       } 
            res.status(201).send(
                  {
                      mensaje:'datos', 
                      data:req.body
                  }
                  )
           
    })
    router.get('/modificar',(req,res)=>{
    if (!req.body) {
          return( 
              res.status(400).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
           )
       }   
       console.log(req); 
       res.status(201).send(
                  {
                      mensaje:'datos', 
                      data:req.body
                  }
                  )

        
    })
    router.get('/obtener',(req,res)=>{
        console.log(req.body," petición")
        if (!req.body) {
          return( 
              res.status(400).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
           )
       }   
       if (!req.body.task) {
        return( 
                res.status(201).send(
                  {
                      mensaje:'datos', 
                      data:task
                  })
        )
       }
       const respuesta = serviciosUsuarios.agregar(req.body.task,req.body.data)
       if (!respuesta) {
              return(   res.status(401).send(
                  {
                      mensaje:'task desconocido '
                  })
           )
       }
     res.status(201).send(
                  {
                      mensaje:'task prueba correcto'
                  })
           
       
           
    })
    router.get('/eliminar',(req,res)=>{
    if (!req.body) {
          return( 
              res.status(400).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
           )
       }    
       res.status(201).send(
                  {
                      mensaje:'datos', 
                      data:req.body
                  }
                  )

    })
}
module.exports = EnrutadorUsers;
