
const modelValidator=(req)=>{
    const login=(body=  {usuario : false, password : false })=>{
        let res={
            msg:"",
            validate:true
            }
        const {usuario = false, password = false }= body
        try{
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
        }catch( error) {
            res.validate=false
            res.msg= error 
        }

        return res

    }
req.task==="login"&& login (req.data)
}
module.exports=modelValidator
