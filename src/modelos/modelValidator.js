
const modelValidator=(data)=>{
    const login=(body)=>{
        let res={
            msg:"",
            validate:true
            }
            if (!body.usuario||!body.password ) {
              res={
                  ...res,
                  msg:!body.usuario? res.msg + "falta usuario" : res
              }
                  res={
                  ...res,
                  msg:!body.password? res.msg + "falta password" : res
                  }
        res.validate=false
            }

        return res

    }
data.task==="login"&& login (data.body)
}
module.exports=modelValidator
