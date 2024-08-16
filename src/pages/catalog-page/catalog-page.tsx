import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { PageHeader } from "@components/page-header/page-header";
import { ProductCard } from "@components/product-card/product-card";


import { useAppSelector, useAppDispatch } from "@hooks/typed-redux-hooks";
import { productsSelect } from "@redux/slices/product-slice/product-slice-selectors";

import { getPoductByCatalogId } from "@redux/async-actions";

import styles from "./catalog-page.module.css";

export const CatalogPage = () => {
    const paramsData = useAppSelector(state =>state.filterSlice.data )
	const dispatch = useAppDispatch();
	const products = useAppSelector(productsSelect);
	const { catalogId } = useParams();

	useEffect(() => {
		dispatch(getPoductByCatalogId({ catalogId,paramsData }));
	}, [paramsData]);



	return (
		<>
			<PageHeader title="Каталог" />
			<div className={styles.main}>
				<div className={styles.products}>
					{products.map(item => (
						<ProductCard {...item} key={item.id} />
					))}
				</div>
			</div>
		</>
	);
};
