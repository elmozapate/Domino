const express=require('express')
const router=express.Router()
const ServiciosUsuarios= require('./../servicios/user.servicios.js');
const serviciosUsuarios=ServiciosUsuarios.obtenerInstancia()
const EnrutadorUsers=()=>{
    router.get('/crear',(req,res)=>{
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
                      data:req
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
                      data:req
                  }
                  )

        
    })
    router.get('/obtener',(req,res)=>{
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
       if (!req.body.task) {
        return( 
                res.status(201).send(
                  {
                      mensaje:'datos', 
                      data:req
                  })
        )
       }
       const respuesta = serviciosUsuarios.agregar(req.body.task,req.body.data)
       if !(!respuesta) {
              return(   res.status(401).send(
                  {
                      mensaje:'task desconocido 'ñ
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
       console.log(req);
       res.status(201).send(
                  {
                      mensaje:'datos', 
                      data:req
                  }
                  )

    })
}
module.exports = EnrutadorUsers;
