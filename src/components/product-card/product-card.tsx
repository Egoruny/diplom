import { FC } from "react";
import { SyntheticEvent } from "react";
import { PriceAria } from "../../components/price-aria/price-aria";
import { Button } from "../../components/button/button";
import { Bage } from "../../components/bage/bage";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/typed-redux-hooks";

import { PATH } from "../../utils/constans/path";

import { setCartItem } from "@redux/slices/cart-slice/cart-slice";
import { createItem } from "@redux/async-actions";

import { getCartItems } from "@redux/slices/cart-slice/cart-selectors";
import { getIsAuth, getUser } from "@redux/slices/auth-slice/auth-selectors";

import { CartItemType } from "@types/basket-item-type";

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
};

export const ProductCard: FC<ProductCardProps> = ({
	id,
	name,
	price,
	discount,
	entireProduct,
	img,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const cartItems = useAppSelector(getCartItems);
	const isAuth = useAppSelector(getIsAuth);
	const userId = useAppSelector(getUser);

	const isItemInCart = cartItems?.some(item => item.id === id);

	const addProduct = (e: SyntheticEvent, selectedProduct: CartItemType) => {
		e.stopPropagation();

		console.log(selectedProduct)
		if (isAuth) {
			dispatch(createItem({ itemId: selectedProduct.id, id: userId }));
		} else {
			dispatch(setCartItem(selectedProduct));
		}
	};

	const showProductPage = () => {
		navigate(`${PATH.ProductPage}/${id}`);
	};
	return (
		<div
			className={styles.card_container}
			onClick={() => showProductPage()}
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
					styles[
						`${entireProduct ? "is_avalible" : "is_not_avalible"}`
					]
				}
			>
				{entireProduct ? available : notAvailable}
			</p>
			<Button
				text={
					!isItemInCart
						? titles.inBasketTitle
						: titles.produсtInBasketTitle
				}
				type="primary"
				onClick={e =>
					addProduct(e, {
						id,
						name,
						price,
						discount,
						img,
						inBasketCount: 1,
					})
				}
				disabled={isItemInCart}
				className={styles.add_btn}
			/>
			{Boolean(discount) && <Bage discount={discount} type="card" />}
		</div>
	);
};
