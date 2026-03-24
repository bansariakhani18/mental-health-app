function Validation(values) {
    let error = {}
    
    if(values.email === "") {
        error.email = "Email Should Not Be An Empty!!"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password Should Not Be An Empty!!"
    }else {
        error.password = ""
    }
    return error;
}

export default Validation;