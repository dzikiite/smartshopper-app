import { useState } from 'react';
import { validateInfo } from '../utils/validateInfo';

export const useForm = () => { 
    const [values, setValues] = useState({
        login: '',
        password: '',
        brandName: '',
        brandLink: '',
        productName: '',
        productLink: '',
        productBrand: '',
        productPrice: '',
        productPriority: true,
    })

    const [errors, setErrors] = useState();

    const handleErrors = () => setErrors(validateInfo(values));

    const handleChange = event => {
        const { name, value, checked, type } = event.target;
        if (type === 'text' || type === 'password') {
            setValues({
                ...values,
                [name]: value
            })
        } else if (type === 'checkbox') {
            setValues({
                ...values,
                [name]: checked
            })
        } else if (type === 'select-one') {
            const { text } = event.target[event.target.selectedIndex];
            setValues({
                ...values,
                [name]: text,
            })
        } 
    }

    return { handleChange, values, setValues, handleErrors, errors };
}