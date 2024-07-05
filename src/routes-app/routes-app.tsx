import { Route, Routes } from "react-router-dom";
import { PATH } from "../utils/constans/path";

import { Layout } from "../pages/layout/layout";
import { MainPage } from "../pages/main-page/main-page";
import { ProductPage } from "../pages/product-page/product-page";

export const RoutesApp = () => {
	return (
		<Routes>
			<Route path={PATH.Root} element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path={PATH.ProductPage} element={<ProductPage />} />
			</Route>
		</Routes>
	);
};
