const login=( user,users)=>{
  let founded=false
users.map((element) => {
  if (JSON.parse(element).usuario === user.usuario)
  {
    founded = element
  }
});
console.log(user,users,"authlogin",founded)
}
module.exports= login 
