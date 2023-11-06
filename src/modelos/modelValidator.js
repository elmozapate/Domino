
const modelValidator=(req)=>{
    let res={
            msg:"",
            validate:true
    }
        const login=(Body)=>{
            const body=JSON.parse( Body)
        try{
            console.log(body)
        const usuario =body.usuario?body.usuario:false
            const password =body.password? body.password:false
            if ((!usuario===true)||(!password===true)) {
              res={
                  ...res,
                  msg:(!usuario===true) ? res.msg + "falta usuario" : res.msg
              }
                  res={
                  ...res,
                  msg:(!password===true) ? res.msg + "falta password" : res.msg
                  }
        res.validate=false
            }
        }catch( error) {
            res.validate=false
            res.msg= error 
        }


    }
req.task==="login"&& login (req.data)
            return res
}
module.exports=modelValidator
