export type LoginUserData = {
    email: string,
    password: string
}

export type SignUpUserData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string
}

export enum FormResponse {
    USER_NOT_FOUND = "Пользователь с такими данными не найден!",
    WRONG_PASSWORD = "Неправильный пароль!",
    ALREADY_EXISTS = "Пользователь с такими данными уже существует!",
    PASSWORDS_DONT_MATCH = "Пароли не совпадают!",
    SUCCESS = "Успех!"
}

export enum FormActions {
    LOGIN,
    SIGNUP
}