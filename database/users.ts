import { USER_DEFAULT_AVATAR } from "@/constants/paths";
import { User, UserRoles } from "@/types/user";

export const templateUsers: Array<User> = [
    {
        id: 0,
        firstName: "Vlad",
        lastName: "Zheltov",
        age: 18,
        email: "vlad.zhelov1@gmail.com",
        login: "vladzheltov1",
        password: "vlad",
        joined: new Date(),
        role: UserRoles.OWNER,
        avatar: USER_DEFAULT_AVATAR,
        wishList: []
    },
    {
        id: 1,
        firstName: "Admin",
        lastName: "",
        age: 100,
        email: "admin@gmail.com",
        login: "admin",
        password: "admin",
        joined: new Date(),
        role: UserRoles.ADMIN,
        avatar: USER_DEFAULT_AVATAR,
        wishList: []
    },
    {
        id: 2,
        firstName: "Moderator",
        lastName: "",
        age: 50,
        email: "moder@gmail.com",
        login: "moder",
        password: "moder",
        joined: new Date(),
        role: UserRoles.MODERATOR,
        avatar: USER_DEFAULT_AVATAR,
        wishList: []
    },
    {
        id: 3,
        firstName: "Test",
        lastName: "User",
        age: 30,
        email: "test@gmail.com",
        login: "test",
        password: "test",
        joined: new Date(),
        role: UserRoles.USER,
        avatar: USER_DEFAULT_AVATAR,
        wishList: []
    }
];