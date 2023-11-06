
const modelValidator=()=>{
    const login=(data)=>{
      console.log("modelv",data)
        let res={
            msg:"",
            validate:true
            }
            if (!data.usuario&&res ||!data.password&&res ) {
              res={
                  ...res,
                  msg:!data.usuario? res.msg + "falta usuario" : res
              }
                  res={
                  ...res,
                  msg:!data.password? res.msg + "falta password" : res
                  }
        res.validate=false
            }

        return res

    }

}
module.exports=modelValidator
