import { PageHead } from "@/components/PageHead";
import { CURRENCY } from "@/constants/symbols";
import { select } from "@/database/api";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Page } from "@/layouts/Page";
import type { User } from "@/types/user";
import { addSpacesToPrice } from "@/utils/adapters";
import { redirect } from "@/utils/redirect";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CartPage: FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const localStore = useLocalStorage();
    const router = useRouter();

    useEffect(() => {
        const storageData = localStore.get("user") as {id: number} | null;
        const authUserId = storageData ? storageData["id"] : null; 

        console.log(storageData, authUserId)

        if(!authUserId){
            redirect("/shop", router);
            return;
        }

        const candidate = select("USERS", {id: authUserId}) as Array<User>;

        if(candidate.length === 0){
            redirect("/shop", router);
            return;
        }

        setUser(candidate[0]);
    }, [])

    return <>
        <PageHead title={"Корзина"} />
        <Page>
            <div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Стоимость</th>
                            <th>Количество</th>
                            <th>Итого</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th>{cartItem.product.title}</th>
                                <th>{cartItem.amount}</th>
                                <th>{addSpacesToPrice(cartItem.product.price.value) + CURRENCY[cartItem.product.price.currency]}</th>
                                <th>{addSpacesToPrice(cartItem.amount * cartItem.product.price.value) + CURRENCY[cartItem.product.price.currency]}</th>
                                <th>Удалить</th>
                            </tr>
                        ))} 
                    </tbody>
                </Table>
            </div>
        </Page>
    </>
}

export default CartPage;