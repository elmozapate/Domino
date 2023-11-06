const login=( user,users)=>{
const found = users.map((element) => {
  if (element.usuario === user.usuario)
  {
    return element
  }
});
console.log(user,users,"authlogin",found)
}
module.exports= login 
