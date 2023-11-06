const Basededatos= require('../db/basededatos.js');
const Login =require('../auth/login.js');
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
                let req= async ()=>{
                  const res=  await basededatos("users")
                    Login (JSON.parse(data),res)  
                        console.log(res,"ir db")
                }
                req()                 
                 return true
                 break;
             
             default:
             return false
                 break;
                 
         }
     }
     
}
module.exports=ServiciosAuth
