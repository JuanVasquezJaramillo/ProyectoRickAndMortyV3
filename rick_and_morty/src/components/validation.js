const validation = (userData)=>{
    const errors = {}; //.test es un método de la validación regex
    const vEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const vPassword = /.*\d+.*/;
    if(!vEmail.test(userData.email)){
        errors.email = 'El email no es válido, por favor intenta de nuevo.'
    }
    if(!userData.email){
        errors.email = 'Por favor, ingresa un email.'
    }
    if(userData.email.length > 35){
        errors.email = 'El email no puede superar los 35 caracteres.'
    }
    
    if(!vPassword.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un número.'
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'La longitud de la contraseña, debe ser mayor de 6 y menor de 10 caracteres.'
    }
    return errors;
}

export default validation;