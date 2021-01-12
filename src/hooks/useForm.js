import { useState } from 'react';
import { validateInfo } from '../utils/validateInfo';

export const useForm = () => { 
    const [values, setValues] = useState({
        login: '',
        password: '',
        brandName: '',
        brandLink: '',
    })

    const [errors, setErrors] = useState();

    const handleErrors = () => setErrors(validateInfo(values));

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return { handleChange, values, setValues, handleErrors, errors };
}