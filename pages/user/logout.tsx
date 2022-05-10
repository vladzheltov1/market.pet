import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Page } from "@/layouts/Page";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Logout: FC = () => {
    const router = useRouter();
    const localStore = useLocalStorage();

    useEffect(() => {
        localStore.remove("user");
        router.push("/");
    }, []);

    return <Page>
        <div></div>
    </Page>
}

export default Logout;