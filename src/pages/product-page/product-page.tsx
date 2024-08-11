import { useAppSelector,useAppDispatch } from "../../hooks/typed-redux-hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



import { toggleItemInBasket } from "@redux/slices/product-slice/product-slice"


import { selectedProductSelect } from "../../redux/slices/product-slice/product-slice-selectors";

import { titles } from "@utils/constans/titles";

import { ProductCharacteristics } from "@components/product-characteristics/product-characteristics";
import { PageHeader } from "@components/page-header/page-header";
import { TotalPrice } from "@components/total-price/total-price";

import { getPoductById } from "@redux/async-actions";

import { SelectedProductType } from "@types/selected-product-type";



import styles from "./product-page.module.css";

const headerTitle = "Карточка товара";

const imgWidth = 400;
const imgHeigth = 600;
const alt = "product";

export const ProductPage = () => {
	const dispatch = useAppDispatch()
	const {id} = useParams()
	const selectedProduct: SelectedProductType | null = useAppSelector(
		selectedProductSelect
	);
	

	useEffect(() => {
		dispatch(getPoductById(id))
	},[])

		
	if (selectedProduct === null) return <div>not found</div>;

console.log(selectedProduct)


	return (
		<>
			<PageHeader title={headerTitle} />
			<div className={styles.product_container}>
				<figure
				className={styles.img_container}
				>
					<img
						src={selectedProduct.img}
						alt={alt}
						width={imgWidth}
						height={imgHeigth}
					/>
				</figure>

				<div className={styles.product_characteristics_container}>
					<h1>{selectedProduct.name}</h1>
					<div className={styles.chenge_color_container}>
						<div className={styles.input_btn_groupe}>
						</div>
					</div>
					<ProductCharacteristics
						characteristicsItems={selectedProduct.info}
					/>
				</div>

				<TotalPrice
					price={selectedProduct.price}
					discount={selectedProduct.discount}
					btnText={titles.inBasketTitle}
					onClick={() => dispatch(toggleItemInBasket(selectedProduct.id))}
					disabledBtn={selectedProduct.inBasket}
				/>
			</div>
		</>
	);
};


