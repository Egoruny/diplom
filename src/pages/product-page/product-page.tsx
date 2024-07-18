import { useAppSelector } from "../../hooks/typed-redux-hooks";
import { useState } from "react";
import { useAddProduct } from "@hooks/add-product";

import { selectedProductSelect } from "../../redux/slices/product-slice/product-slice-selectors";

import { titles } from "@utils/constans/titles";

import { InputButton } from "@components/input-button/input-button.tsx";
import { ProductCharacteristics } from "@components/product-characteristics/product-characteristics";
import { PageHeader } from "@components/page-header/page-header";
import { TotalPrice } from "@components/total-price/total-price";

import { SelectedProductType } from "@types/selected-product-type";

import { colors1 } from "@utils/constans/colors";

import styles from "./product-page.module.css";

const headerTitle = "Карточка товара";

const imgWidth = 400;
const imgHeigth = 600;
const alt = "product";

export const ProductPage = () => {
	const selectedProduct: SelectedProductType | null = useAppSelector(
		selectedProductSelect
	);
	const { addProductInBasket } = useAddProduct();
	const [productColor, setProductColor] = useState("черный");

	const setColor = e => {
		setProductColor(e.target.value);
	};


	if (selectedProduct === null) return <div>not found</div>;

	const { characteristics, colors, ...basketItem } = selectedProduct;



	return (
		<>
			<PageHeader title={headerTitle} />
			<div className={styles.product_container}>
				<figure
				className={styles.img_container}
					style={{ border: `3px solid ${colors1.get(productColor)}` }}
				>
					<img
						src={selectedProduct.imageSrc}
						alt={alt}
						width={imgWidth}
						height={imgHeigth}
					/>
				</figure>

				<div className={styles.product_characteristics_container}>
					<h1>{selectedProduct.productDiscription}</h1>
					<div className={styles.chenge_color_container}>
						<span>цвет:{productColor}</span>
						<div className={styles.input_btn_groupe}>
							{selectedProduct.colors.map(({ color }, index) => (
								<InputButton
									onClick={setColor}
									value={color}
									key={index}
								/>
							))}
						</div>
					</div>
					<ProductCharacteristics
						characteristicsItems={selectedProduct.characteristics}
					/>
				</div>

				<TotalPrice
					price={selectedProduct.price}
					discount={selectedProduct.discount}
					btnText={titles.inBasketTitle}
					onClick={() => addProductInBasket(basketItem)}
					disabledBtn={selectedProduct.inBasket}
				/>
			</div>
		</>
	);
};

// id:selectedProduct.id,
// productDiscription:selectedProduct.productDiscription,
// price:selectedProduct.price,
// discount:selectedProduct.discount,
// imageSrc:selectedProduct.imageSrc,
// inBasketCount:selectedProduct.inBasketCount
