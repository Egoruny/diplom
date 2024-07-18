import { createBrowserRouter,Link } from "react-router-dom";
import { PATH } from "../utils/constans/path";
import { Layout } from "../pages/layout/layout";
import { MainPage } from "../pages/main-page/main-page";
import { ProductPage } from "../pages/product-page/product-page";
import { BasketPage } from "@pages/basket-page/basket-page";

// export const RoutesApp = () => {
// 	return (
// 		<Routes>
// 			<Route path={PATH.Root} element={<Layout />}>
// 				<Route index element={<MainPage />} />
// 				<Route
// 					path={`${PATH.ProductPage}/:id`}
// 					element={<ProductPage />}
// 					handle={{
// 						crumb: () => <span>что то</span>,
// 					}}
// 				/>
// 				<Route path={PATH.BasketPage} element={<BasketPage />} />
// 			</Route>
// 		</Routes>
// 	);
// };

export const router = createBrowserRouter([
	{
		path: PATH.Root,
		element: <Layout />,
		handle:{
			crumb: () =>{ 
			return <Link to={PATH.Root}>Главная/</Link>
		},
			},
		children: [
			{
				path:PATH.Root,
				element: <MainPage />,
			},
			{
				path: `${PATH.ProductPage}/:id`,
				element: <ProductPage />,
				handle:{
				crumb: () =>{ 
				return <Link to={PATH.ProductPage}>Карточка товара/</Link>
			},
				}
			},
			{
				path: PATH.BasketPage,
				element: <BasketPage />,
				handle:{
					crumb: () =>{ 
					return <Link to={PATH.BasketPage}>Корзина/</Link>
				},
					},
			},
		],
	},
]);
