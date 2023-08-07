//rfc ---- react function based component
//imr -- import raact
import React from 'react'
//we want to supply alert as a props(property)
export default function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
           
        </div>

    )
}

