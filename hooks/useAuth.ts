import { templateUsers } from "@/database/tables/users";
import { FormResponse, LoginUserData, SignUpUserData } from "@/types/auth";
import { User } from "@/types/user";
import { findOne } from "@/utils/search";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
    const localStore = useLocalStorage();

    const login = (userData: LoginUserData): FormResponse => {
        const { email, password } = userData;
        const conditions = { email };

        const candidate = findOne<User>(templateUsers, conditions);

        if (!candidate) {
            return FormResponse.USER_NOT_FOUND;
        }

        if (candidate.password.trim() !== password.trim()) {
            return FormResponse.WRONG_PASSWORD;
        }

        localStore.add("user", JSON.stringify({ id: candidate.id }));

        return FormResponse.SUCCESS;
    }

    /**
     * This function does not actually add new users to database, it basically works as a validator cause there's no server :)
     * @param userData 
     * @returns 
     */
    const signUp = (userData: SignUpUserData): FormResponse => {
        const { email, password, passwordConfirm } = userData;

        const alreadyExists = !!findOne<User>(templateUsers, { email });

        if (alreadyExists) {
            return FormResponse.ALREADY_EXISTS;
        }

        if (password.trim() !== passwordConfirm.trim()) {
            return FormResponse.PASSWORDS_DONT_MATCH;
        }

        return FormResponse.SUCCESS;
    }

    const logOut = (): void => {
        localStore.remove("user");
    }

    const isLoggedIn = (): boolean => {
        return !!localStore.get("user");
    }

    return {
        login,
        signUp,
        logOut,
        isLoggedIn
    };
}