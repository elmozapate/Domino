const Responses = (props)=> {
    const {
        res=false,
        code: 400,
        data = ""
    } = props
    if (res && (!res !== true)) {

        switch (code) {
            case 'case':
                return(
                    res.status(code).send(
                        {
                            mensaje: data
                        }
                    ))
                break;

            default:
                return(
                    res.status(code).send(
                        {
                            mensaje: "rejected"
                        }
                    )
                )

                break;

        }

    }
    reurn false
}
module.exports = Responses
