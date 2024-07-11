import { useAppSelector } from "../../hooks/typed-redux-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { selectedProductSelect } from "../../redux/slices/product-slice/product-slice-selectors";

import { titles } from "@utils/constans/titles";

import { PriceAria } from "@components/price-aria/price-aria";
import { InputButton } from "@components/input-button/input-button.tsx";
import { Button } from "@components/button/button";
import { ProductCharacteristics } from "@components/product-characteristics/product-characteristics";


import { colors } from "@utils/constans/colors";

import backIcon from "../../assets/back.svg";

import styles from "./product-page.module.css";

export const ProductPage = () => {
	const selectedProduct = useAppSelector(selectedProductSelect);
	const [productColor,setProductColor] = useState('черный')
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	const setColor = (e) => {
		setProductColor(e.target.value)
	}

	console.log(selectedProduct);

	return (
		<>
			<div className={styles.product_page_header}>
				<Button
					type="defult"
					className={styles.back_btn}
					icon={backIcon}
					size="small"
					onClick={goBack}
				/>
				<h2>Карточка товара</h2>
			</div>
			<div className={styles.product_container}>
				<figure style={{ border: `3px solid ${colors.get(productColor)}`}}>
					<img
						src="https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg"
						alt="product"
						width={400}
						height={600}
					/>
				</figure>

				<div className={styles.product_characteristics_container}>
					<h1>{selectedProduct.productDiscription}</h1>
					<div className={styles.chenge_color_container}>
						<span>цвет:{productColor}</span>
						<div className={styles.input_btn_groupe}>
							{selectedProduct.colors.map(({color}) => <InputButton onClick={setColor} value={color}/>)}
						</div>
					</div>
				<ProductCharacteristics characteristicsItems={selectedProduct.characteristics}/>
				</div>

				<div className={styles.prise_container}>
					<PriceAria price={selectedProduct.price} discount={selectedProduct.discount} />
					<Button size="large" text={titles.inBasketTitle} />
				</div>
			</div>
		</>
	);
};
