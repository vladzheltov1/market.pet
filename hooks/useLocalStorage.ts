import { isClient } from "@/utils/ssr";

export const useLocalStorage = () =>{
    const add = (key: string, value: object | string): void => {
        if(isClient() && !localStorage.getItem(key)){
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    const update = (key: string, newValue: string): void => {
        if(isClient()){
            localStorage.setItem(key, newValue);
        }
    }

    const get = (key: string): string | null => {
        if(isClient()){
            return localStorage.getItem(key);
        }

        return null;
    }
    
    const remove = (key: string): void => {
        if(isClient()){
            localStorage.removeItem(key);
        }
    }

    return {add, update, get, remove};
}