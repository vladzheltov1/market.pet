import { templateUsers } from "@/database/users";
import { FormResponse, LoginUserData } from "@/types/auth";
import { User } from "@/types/user";
import { findOne } from "@/utils/search";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
    const localStore = useLocalStorage();

    const login = (userData: LoginUserData): FormResponse => {
        const {email, password} = userData;
        const conditions = {email};

        const candidate = findOne<User>(templateUsers, conditions);

        if(!candidate){
            return FormResponse.USER_NOT_FOUND;
        }

        if(candidate.password.trim() !== password.trim()){
            return FormResponse.WRONG_PASSWORD;
        }

        localStore.add("user", JSON.stringify({id: candidate.id}));

        return FormResponse.SUCCESS;
    }

    return {login};
}