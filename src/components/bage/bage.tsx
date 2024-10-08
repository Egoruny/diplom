import { FC } from "react";
import styles from "./bage.module.css";
import { useAppSelector } from "@hooks/typed-redux-hooks";
import { getCartItems } from "@redux/slices/cart-slice/cart-selectors";


type BageProps = {
	discount?: number;
	type: "basket" | "card";
	quantityGoodsINBasket?: number;
};

enum bageType  {
card = "card",
basket= "basket"
}

const maxGoodsCount = 9;

export const Bage: FC<BageProps> = ({ discount, type = bageType.card }) => {
	const quantityGoodsInBasket = useAppSelector(getCartItems);

	if (type === bageType.card) {
		return <div className={styles.bage_container_card}>{discount}%</div>;
	} else if (type === bageType.basket && quantityGoodsInBasket?.length) {
		const quantityGoodsMaxCount =
			quantityGoodsInBasket?.length <= maxGoodsCount
				? quantityGoodsInBasket?.length
				: `${maxGoodsCount}+`;

		return (
			<div className={styles.bage_container_basket}>
				{quantityGoodsMaxCount}
			</div>
		);
	} else {
		return null;
	}
};
