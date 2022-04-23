
import { Login } from "../pages/LoginRegister/Login.jsx";
import { Register } from "../pages/LoginRegister/Register.jsx";
import { Home } from "../pages/home/Home.jsx";
import { Cart } from "../pages/cart/Cart.jsx";
import { Payment } from "../pages/payment/Payment.jsx";
import { Success } from "../pages/success/Success.jsx";
import { Details } from "../pages/details/Details.jsx";
import { NotFound } from "./notFound/NotFound.jsx";
import { Layout } from "../layout/Layout.jsx";
import { PrivateRoutes } from "./PrivateRoutes";

import { ListProducts } from "../components/Backoffice/ListProducts/ListProducts";
import { Backoffice } from "../pages/Backoffice/Backoffice.jsx";
import { BackofficeLayout } from "../layout/BackofficeLayout/BackofficeLayout"
import { OrdersControl } from "../components/Backoffice/ordersControl/OrdersControl.jsx";
import { DeliveryTable } from "../components/Backoffice/DeliveryTable/DeliveryTable.jsx";

export { Login, Register, Home, Cart, Payment, Success, Layout, PrivateRoutes, NotFound, Details,ListProducts, OrdersControl, Backoffice,BackofficeLayout, DeliveryTable }