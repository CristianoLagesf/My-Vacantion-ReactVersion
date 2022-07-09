

export const validateLoginForm = (value) => {
    const erros = {

    }
    if (!value.login) {
        erros.login = 'Required';
    } else if (value.login.length < 6) {
        erros.login = 'Must be at least 6 characters'
    } else if (value.login.length > 15) {
        erros.login = 'Must be less than 15 characters'
    }
    if (!value.name) {
        erros.name = 'Required';
    } else if (value.name.length < 6) {
        erros.name = 'Must be at least 6 characters'
    } else if (value.name.length > 15) {
        erros.name = 'Must be less than 15 characters'
    }
    if (!value.password) {
        erros.password = 'Required';
    } else if (value.password.length < 6) {
        erros.password = 'Must be at least 6 characters'
    } else if (value.password.length > 15) {
        erros.password = 'Must be less than 15 characters'
    }
    if (!value.RepeatPassword) {
        erros.RepeatPassword = 'Required';
    } else if (value.RepeatPassword.length < 6) {
        erros.RepeatPassword = 'Must be at least 6 characters'
    } else if (value.RepeatPassword.length > 15) {
        erros.RepeatPassword = 'Must be less than 15 characters'
    }
    return erros
}