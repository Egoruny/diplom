import { createBrowserRouter, Link } from "react-router-dom";
import { PATH } from "../utils/constans/path";
import { Layout } from "../pages/layout/layout";
import { MainPage } from "../pages/main-page/main-page";
import { ProductPage } from "../pages/product-page/product-page";
import { BasketPage } from "@pages/basket-page/basket-page";
import { OrderingPage } from "@pages/ordering-page/ordering-page";
import { CatalogPage } from "@pages/catalog-page/catalog-page";



export const router = createBrowserRouter([
	{
		path: PATH.Root,
		element: <Layout />,
		handle: {
			crumb: () => {
				return <Link to={PATH.Root}>Главная/</Link>;
			},
		},
		children: [
			{
				path: PATH.Root,
				element: <MainPage />,
			},
			{
				path: `${PATH.ProductPage}/:id`,
				element: <ProductPage />,
				handle: {
					crumb: () => {
						return (
							<Link to={PATH.ProductPage}>Карточка товара/</Link>
						);
					},
				},
			},
			{
				path: PATH.BasketPage,
				element: <BasketPage />,
				handle: {
					crumb: () => {
						return <Link to={PATH.BasketPage}>Корзина/</Link>;
					},
				},
			},
			{
				path: PATH.OrderingPage,
				element: <OrderingPage />,
				handle: {
					crumb: () => {
						return (
							<Link to={PATH.OrderingPage}>
								Оформление заказа/
							</Link>
						);
					},
				},
			},
			{
				path: `${PATH.CatalogPage}/:catalogId`,
				element: <CatalogPage />,
				handle: {
					crumb: () => {
						return (
							<Link to={PATH.OrderingPage}>
								Каталог
							</Link>
						);
					},
				},
			},
		],
	},
]);
