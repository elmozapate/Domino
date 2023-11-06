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
                 console.log(data)
                 
                 return true
                 break;
             
             default:
             return false
                 break;
                 
         }
     }
     
}
module.exports=ServiciosAuth
