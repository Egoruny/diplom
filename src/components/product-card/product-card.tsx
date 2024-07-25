import { FC } from "react";
import { SyntheticEvent } from "react";
import { PriceAria } from "../../components/price-aria/price-aria";
import { Button } from "../../components/button/button";
import { Bage } from "../../components/bage/bage";


import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/typed-redux-hooks";

import { PATH } from "../../utils/constans/path";

import { setSelectedProduct } from "../../redux/slices/product-slice/product-slice";
import { toggleItemInBasket } from "@redux/slices/product-slice/product-slice"


import { SelectedProductType } from "@types/selected-product-type";
import { BasketItemType } from "@types/basket-item-type";


import { titles } from "../../utils/constans/titles";

import styles from "./product-card.module.css";

const available = "в наличии";

const notAvailable = "нет в наличии";

const imageSize = 200;


type ProductCardProps = {
	id: string;
	productDiscription: string;
	price: number;
	discount: number;
	isAvalible: boolean;
	imageSrc: string;
	characteristics: any;
	colors: any;
	inBasket: boolean;
	inBasketCount:number;
};

export const ProductCard: FC<ProductCardProps> = ({
	id,
	productDiscription,
	price,
	discount,
	isAvalible,
	imageSrc,
	characteristics,
	colors,
	inBasket,
	inBasketCount,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const addProduct = (e:SyntheticEvent, selectedProduct:BasketItemType) => {
		e.stopPropagation();
		dispatch(toggleItemInBasket(selectedProduct.id))
	};



	const showProductPage = (selectedProduct:SelectedProductType) => {
		dispatch(setSelectedProduct(selectedProduct));
		navigate(`${PATH.ProductPage}/${id}`);
	};
	return (
		<div
			className={styles.card_container}
			onClick={() =>
				showProductPage({
					id,
					price,
					productDiscription,
					imageSrc,
					characteristics,
					colors,
					discount,
					inBasketCount,
					inBasket
				})
			}
		>
			<figure className={styles.img_container}>
				<img
					src={imageSrc}
					width={imageSize}
					height={imageSize}
					className={styles.card_img}
				/>
			</figure>
			<h4>{productDiscription}</h4>
			<PriceAria price={price} discount={discount} />
			<p
				className={
					styles[`${isAvalible ? "is_avalible" : "is_not_avalible"}`]
				}
			>
				{isAvalible ? available : notAvailable}
			</p>
			<Button
				text={
					!inBasket
						? titles.inBasketTitle
						: titles.produсtInBasketTitle
				}
				type="primary"
				onClick={(e) =>
					addProduct(e,{
						id,
						productDiscription,
						price,
						discount,
						imageSrc,
						inBasketCount,
					})
				}
				disabled={inBasket}
				className={styles.add_btn}
			/>
			{Boolean(discount) && <Bage discount={discount} type="card" />}
		</div>
	);
};
