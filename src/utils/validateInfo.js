export const validateInfo = values => {
    let errors = {}

    if(!values.login.trim()) {
        errors.login = "Login jest wymagany"
    } 

    if(!values.password.trim()) {
        errors.password = "Hasło jest wymagane"
    } else {
        errors.password = "Nieprawidłowy login lub hasło"
    }

    return errors;
}