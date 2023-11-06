const login=( user,users)=>{
  let founded=false
users.map((element) => {
  console.log(element,"map")
  if ((element).usuario === user.usuario)
  {
    founded = element
  }
});
  if(!founded){
    return ({
      exist:false,
      auth:false
    })
  }
  if(founded.password!==user.password){
    return ({
      exist:true,
      auth:false
    })
  }
  return ({
      exist:true,
      auth:true
    })
}
module.exports= login 
