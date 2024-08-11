import { useAppSelector, useAppDispatch } from "@hooks/typed-redux-hooks";
import { useNavigate } from "react-router-dom";

import {
	toggleItemInBasket,
	setCountItem,
} from "@redux/slices/product-slice/product-slice";
import { setTotalPrice } from "@redux/slices/ordering-slice/ordering-slice";


import { TotalPrice } from "@components/total-price/total-price";

import { PageHeader } from "@components/page-header/page-header";
import { BasketItem } from "@components/basket-item/basket-item";

import { getBasketItemsSelect } from "@redux/slices/product-slice/product-slice-selectors";

import { PATH } from "@utils/constans/path";
import { titles } from "@utils/constans/titles";

import { calculateTotalPrice } from "@utils/calculate-total-price";


const BtnText = "Оформить заказ";
const title = "Корзина";
const emptyBaket = "Корзина пуста";

import styles from "./basket-page.module.css";

export const BasketPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const basketItems = useAppSelector(getBasketItemsSelect);
	const isEmptyBasket = !basketItems.length;

	const makeAnOrder = () => {
		dispatch(setTotalPrice(calculateTotalPrice(basketItems)));
		navigate(PATH.OrderingPage);
	};

	const onDeleteItems = (deleteItemId: string) => {
		dispatch(toggleItemInBasket(deleteItemId));
	};

	const setCount = (id: string, value: number) => {
		dispatch(setCountItem({ id, value }));
	};

	return (
		<div className={styles.main_container}>
			<PageHeader title={title} />
			<div className={styles.page_container}>
				<div className={styles.items_container}>
					<div className={styles.delete}></div>
					{isEmptyBasket ? (
						<h2>{emptyBaket}</h2>
					) : (
						basketItems.map(bascetItem => (
							<BasketItem
								{...bascetItem}
								key={bascetItem.id}
								setCountItem={setCount}
								deleteItem={onDeleteItems}
							/>
						))
					)}
				</div>
				<TotalPrice
					title={titles.total}
					price={calculateTotalPrice(basketItems)}
					discount={0}
					btnText={BtnText}
					onClick={makeAnOrder}
					disabledBtn={isEmptyBasket}
				/>
			</div>
		</div>
	);
};
