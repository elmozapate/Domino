const login=( user,users)=>{
const found = users.find((element) => element.usuario === user.usuario);
console.log(user,users,"authlogin",found)
}
module.exports= login 
