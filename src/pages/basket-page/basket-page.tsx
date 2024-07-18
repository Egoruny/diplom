import { useState } from "react";
import { useAppSelector,useAppDispatch } from "@hooks/typed-redux-hooks";

import { deleteItems } from "@redux/slices/basket-slice/basket-slice";
import { setItemsOutBasket } from "@redux/slices/product-slice/product-slice";

import { Button } from "@components/button/button";
import { TotalPrice } from "@components/total-price/total-price";

import { PageHeader } from "@components/page-header/page-header";
import { BasketItem } from "@components/basket-item/basket-item";
import { basketSliceSelect } from "@redux/slices/basket-slice/basket-slice-selectors";

import { calculateTotalPrice } from "@utils/calculate-total-price";

import basketIcon from "../../assets/deleteIcon.svg";

const BtnText = "Оформить заказ";
const title = "Корзина";
const emptyBaket = "Корзина пуста";

import styles from "./basket-page.module.css";

export const BasketPage = () => {
	const dispatch = useAppDispatch()
	const [idsArray, setIdsArray] = useState([]);
	const basketItems = useAppSelector(basketSliceSelect);


	const onSetIds = (id:string) => {
		if (idsArray.includes(id))
            setIdsArray(idsArray.filter((element) => element !== id));
        else setIdsArray([...idsArray, id]);
	};


	const onDeleteItems = () => {
		dispatch(deleteItems(idsArray))
		dispatch(setItemsOutBasket(idsArray))
	}


	if (!basketItems.length) {
		return (
			<>
				<PageHeader title={title} />
				<div className={styles.empty}>
					<h2>{emptyBaket}</h2>
				</div>
			</>
		);
	}

	return (
		<div className={styles.main_container}>
			<PageHeader title={title} />
			<div className={styles.page_container}>
				<div className={styles.items_container}>
					<div className={styles.delete}>
						{!!idsArray.length && <Button icon={basketIcon} type="defult" size="small" onClick={onDeleteItems} />}
					</div>
					{basketItems.map(bascetItem => (
						<BasketItem {...bascetItem} key={bascetItem.id} checkboxHandler={onSetIds} />
					))}
				</div>
				<TotalPrice
					title="Итого:"
					price={calculateTotalPrice(basketItems)}
					discount={0}
					btnText={BtnText}
				/>
			</div>
		</div>
	);
};
