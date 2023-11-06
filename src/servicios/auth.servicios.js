const Basededatos= require('../db/basededatos.js');
const LogAuth =require('../auth/login.js');
const basededatos = Basededatos
class ServiciosAuth {
    static _instanciaEstaticaAuth = null
     constructor(){}
     static obtenerInstancia() {
         
         if (!ServiciosAuth._instanciaEstaticaAuth) {
             ServiciosAuth._instanciaEstaticaAuth = new ServiciosAuth()
         }
         return (
             ServiciosAuth._instanciaEstaticaAuth
             )
     }
     login( task,data,token) {
         switch (task) {
             case 'login':
                 let authRes=false
                let req= async ()=>{
                    
                  const res=  await basededatos("users")
                   authRes=  LogAuth (JSON.parse(data),res)  
                                   
                    console.log(authRes,"@")
             
                    return  authRes
                }
                 req()

                 break;
             
             default:
             return false
                 break;
                 
         }
     }
     
}
module.exports=ServiciosAuth
