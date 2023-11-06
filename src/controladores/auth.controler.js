const express=require('express');
const router=express.Router();
const modelValidator =require('../modelos/modelValidator.js');
const ServiciosAuth= require('../servicios/auth.servicios.js');
  const Basededatos= require('../db/basededatos.js');
const basededatos = Basededatos
router.put('/crear',(req,res)=>{
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
                      mensaje:'crear', 
                      data:req.body
                  }
                  )
           
    })
     router.post('/modificar',(req,res)=>{
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
                      mensaje:'modificar', 
                      data:req.body
                  }
                  )

        
    })
    router.post('/login',(req,res)=>{
        console.log(req.body," login")
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
                      mensaje:'obtener', 
                      data:task
                  })
        )
       }
      if ( !req.body.data || !modelValidator.login(req.body.data).validate){
      return(   res.status(401).send(
                  {
                      mensaje:req.body.data? "falta usuario y contraseña":modelValidator.login(req.body.data).msg
                  })
             )
      }
       const respuesta = ServiciosAuth.login(req.body.task,req.body.data)
       if (!respuesta) {
              return(   res.status(401).send(
                  {
                      mensaje:'task desconocido '
                  })
           )
       }
      const dbRes=async() =>{
          await basededatos()
      }
      dbRes()  
     res.status(201).send(
                  {
                      mensaje:'task login correcto'
                  })
           
       
           
    })
    router.delete('/eliminar',(req,res)=>{
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
                      mensaje:'eliminar', 
                      data:req.body
                  }
                  )

    })
module.exports = router;
          
