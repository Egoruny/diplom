import { useAppSelector,useAppDispatch } from "../../hooks/typed-redux-hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { selectedProductSelect } from "../../redux/slices/product-slice/product-slice-selectors";
import { getCartItems } from "@redux/slices/cart-slice/cart-selectors";

import { titles } from "@utils/constans/titles";

import { ProductCharacteristics } from "@components/product-characteristics/product-characteristics";
import { PageHeader } from "@components/page-header/page-header";
import { TotalPrice } from "@components/total-price/total-price";

import { setCartItem } from "@redux/slices/cart-slice/cart-slice";
import { clearOptions } from "@redux/slices/product-slice/product-slice";

import { getPoductById } from "@redux/async-actions";

import { SelectedProductType } from "@types/selected-product-type";
import { CartItemType } from "@types/basket-item-type";


import styles from "./product-page.module.css";

const headerTitle = "Карточка товара";

const imgWidth = 400;
const imgHeigth = 600;
const alt = "product";

export const ProductPage = () => {
	const dispatch = useAppDispatch()
	const {id} = useParams()
	const selectedProduct = useAppSelector(
		selectedProductSelect
	) as SelectedProductType;

	const cartItems = useAppSelector(getCartItems)
	const isItemInCart  = cartItems?.some((item) => item?.id === selectedProduct?.id)


	

	useEffect(() => {
		if(id)
		dispatch(getPoductById(id))

		dispatch(clearOptions())
	},[])

	const addProduct = ( selectedProduct:CartItemType) => {
		dispatch(setCartItem(selectedProduct))
	};

		
	if (selectedProduct === null) return <div>not found</div>;



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
					onClick={() => addProduct({
						id:selectedProduct.id,
						name:selectedProduct.name,	
						price:selectedProduct.price,
						discount:selectedProduct.discount,
						img:selectedProduct.img,
						inBasketCount:1
					})}
					disabledBtn={isItemInCart}
				/>
			</div>
		</>
	);
};


