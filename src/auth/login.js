const login=( user,users)=>{
  let founded=false
users.map((element) => {
  console.log(element,"map")
  if ((element).usuario === user.usuario)
  {
    founded = element
  }
});
console.log(user,users,"authlogin",founded)
}
module.exports= login 
