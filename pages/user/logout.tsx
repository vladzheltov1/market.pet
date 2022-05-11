import { useAuth } from "@/hooks/useAuth";
import { Page } from "@/layouts/Page";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Logout: FC = () => {
    const router = useRouter();
    const {logOut} = useAuth();

    useEffect(() => {
        logOut();
        router.push("/");
    });

    return <Page>
        <div>Пожалуйста, подождите!</div>
    </Page>
}

export default Logout;