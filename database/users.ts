import { USER_DEFAULT_AVATAR } from "@/constants/paths";
import { User, UserRoles } from "@/types/user";

export const templateUsers: Array<User> = [
    {
        id: 0,
        firstName: "Vlad",
        lastName: "Zheltov",
        email: "vlad.zhelov1@gmail.com",
        password: "vlad",
        joined: new Date(),
        role: UserRoles.OWNER,
        avatar: USER_DEFAULT_AVATAR,
        wishList: [],
        cart: []
    },
    {
        id: 1,
        firstName: "Admin",
        lastName: "",
        email: "admin@gmail.com",
        password: "admin",
        joined: new Date(),
        role: UserRoles.ADMIN,
        avatar: USER_DEFAULT_AVATAR,
        wishList: [],
        cart: []
    },
    {
        id: 2,
        firstName: "Moderator",
        lastName: "",
        email: "moder@gmail.com",
        password: "moder",
        joined: new Date(),
        role: UserRoles.MODERATOR,
        avatar: USER_DEFAULT_AVATAR,
        wishList: [],
        cart: []
    },
    {
        id: 3,
        firstName: "Test",
        lastName: "User",
        email: "test@gmail.com",
        password: "test",
        joined: new Date(),
        role: UserRoles.USER,
        avatar: USER_DEFAULT_AVATAR,
        wishList: [],
        cart: []
    }
];