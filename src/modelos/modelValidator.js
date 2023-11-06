
const modelValidator=()=>{
    const login=(data)=>{
      console.log("modelv",data)
        let res={
            msg:"",
            validate:true
            }
            if (!data.usuario&&res ||!data.password&&res ) {
                 !data.usuario&&res = res.msg + "falta usuario"
        !data.password&&res = res.msg + "falta password"
        res.validate=false
            }

        return res

    }

}
module.exports=modelValidator
