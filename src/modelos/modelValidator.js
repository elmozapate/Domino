
const modelValidator=(data)=>{
    const login=(body)=>{
        let res={
            msg:"",
            validate:true
            }
        const {usuario = false, password = false }= body
            if (!usuario||!password) {
              res={
                  ...res,
                  msg:!usuario? res.msg + "falta usuario" : res
              }
                  res={
                  ...res,
                  msg:!password? res.msg + "falta password" : res
                  }
        res.validate=false
            }

        return res

    }
data.task==="login"&& login (data.body)
}
module.exports=modelValidator
