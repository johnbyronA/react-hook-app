import { useState } from "react";

export const useForm = (initialform = {}) => {

    const [formstate, setFormstate] = useState(initialform);

    const onInputChange=({target})=>{
        const {name, value} = target;
        setFormstate({
            ...formstate,
            [name]: value
        })
    }

    const onResetForm = () =>{
        setFormstate(initialform)
    }

    return{
        ...formstate,
        formstate,
        onInputChange,
        onResetForm,
    }
}

