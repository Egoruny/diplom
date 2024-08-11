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
	id: number;
	name: string;
	price: number;
	discount: number;
	entireProduct: number;
	img: string;
	inBasket: boolean;
	inBasketCount:number;
};

export const ProductCard: FC<ProductCardProps> = ({
	id,
	name,
	price,
	discount,
	entireProduct,
	img,
	inBasket,
	inBasketCount,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const addProduct = (e:SyntheticEvent, selectedProduct:BasketItemType) => {
		e.stopPropagation();
		dispatch(toggleItemInBasket(selectedProduct.id))
	};



	const showProductPage = () => {
		navigate(`${PATH.ProductPage}/${id}`);
	};
	return (
		<div
			className={styles.card_container}
			onClick={() =>
				showProductPage()
			}
		>
			<figure className={styles.img_container}>
				<img
					src={img}
					width={imageSize}
					height={imageSize}
					className={styles.card_img}
				/>
			</figure>
			<h4>{name}</h4>
			<PriceAria price={price} discount={discount} />
			<p
				className={
					styles[`${entireProduct ? "is_avalible" : "is_not_avalible"}`]
				}
			>
				{entireProduct ? available : notAvailable}
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
						name,
						price,
						discount,
						img,
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
