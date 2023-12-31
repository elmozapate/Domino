const express=require('express');
const router=express.Router();
const modelValidator =require('../modelos/modelValidator.js');
const serviciosAuth= require('../servicios/auth.servicios.js');
const ServiciosAuth=serviciosAuth.obtenerInstancia()
const Responses= require('../metodos/responses.js');
const Res = Responses ;
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
    if (!req.body ||  !req.body.task) {
                   console.log("aca")
        return( 
              Res({ res:res,code:400, mensaje:"error pero bien" })

          )
       }   
       console.log("paso"); 
       res.status(201).send(
                  {
                      mensaje:'modificar', 
                      data:req.body
                  }
                  )

        
    })
    router.post('/login',(req,res)=>{
        if (!req.body) {
          return( 
              res.status(400).send(
                  {
                      mensaje:'cuerpo vacio'
                  }
                  )
           )
       }   
       if (( !req.body.task )===true) {
        return( 
                res.status(400).send(
                  {
                      mensaje:'task vacio'
                  }
                  )
        )
       }
      if (!req.body.data || !req.body.task||  typeof JSON.parse( req.body.data ) !== "object" ||(  ( !req.body.data=== true ) ) || !modelValidator(req.body).validate){
             console.log( typeof JSON.parse( req.body.data ), " type")
        return(   res.status(401).send(
                  {
                      mensaje:!req.body.data? "falta usuario y contraseña":!req.body.task? "faltan datos":modelValidator(req.body).msg
                  })
             )
      }
          const authRes=  ServiciosAuth.login(req.body.task,req.body.data)
           if( authRes){
           if(!authRes.existe ||!authRes.auth){
             return(   res.status(401).send(
                  {
                      mensaje:!authRes.existe?" usuario desconocido" :' password erróneo'
                  })
           )
           }
              res.status(201).send(
                  {
                      mensaje:'task login correcto'
                  })

       
        console.log( authRes, "res servicios")
           
       }
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
