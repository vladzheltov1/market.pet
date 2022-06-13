import { templateProducts } from "../tables/products";
import { templatePurchases } from "../tables/purchases";
import { templateUsers } from "../tables/users";
import { TablesContent } from "../types/tables";

export const TABLES: TablesContent = {
    USERS: templateUsers,
    PRODUCTS: templateProducts,
    PURCHASES: templatePurchases
}