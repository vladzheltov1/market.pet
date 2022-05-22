import { isClient } from "@/utils/ssr";

export const useLocalStorage = () => {
    const add = (key: string, value: object | string): void => {
        if (isClient() && !localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    const update = (key: string, newValue: string): void => {
        if (isClient()) {
            localStorage.setItem(key, newValue);
        }
    }

    const get = (key: string): object | null => {
        if (isClient()) {
            const data = localStorage.getItem(key);
            return typeof data === "string" ? JSON.parse(data) : null;
        }

        return null;
    }

    const remove = (key: string): void => {
        if (isClient()) {
            localStorage.removeItem(key);
        }
    }

    return { add, update, get, remove };
}