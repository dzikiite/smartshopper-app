import { useState } from 'react';
import { validateInfo } from '../utils/validateInfo';

export const useForm = () => { 
    const [loginValues, setLoginValues] = useState({
        login: '',
        password: '',
    })

    const [errors, setErrors] = useState();

    const handleErrors = () => setErrors(validateInfo(loginValues));

    const handleChange = event => {
        const { name, value } = event.target;
        setLoginValues({
            ...loginValues,
            [name]: value
        })
    }

    return { handleChange, loginValues, handleErrors, errors };
}