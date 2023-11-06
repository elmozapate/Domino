class ServiciosUsuarios {
    static _instanciaEstaticaUsuarios = null
     constructor(){}
     static obtenerInstancia() {
         
         if (!ServiciosUsuarios._instanciaEstaticaUsuarios) {
             ServiciosUsuarios._instanciaEstaticaUsuarios = new ServiciosUsuarios()
         }
         return (
             ServiciosUsuarios._instanciaEstaticaUsuarios
             )
     }
     agregar( task,data,token) {
                         console.log(" agregar ", task,data,token)
         switch (task) {
             case 'test':
                 console.log(data)
                 return true
                 break;
             
             default:
             return false
                 break;
                 
         }
     }
     
}
module.exports=ServiciosUsuarios
