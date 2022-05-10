export type LoginUserData = {
    email: string,
    password: string
}

export enum FormResponse {
    USER_NOT_FOUND = "Пользователь с такими данными не найден!",
    WRONG_PASSWORD = "Неправильный пароль!",
    SUCCESS = "Успех!"
}