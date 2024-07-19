import { FC } from "react";
import styles from "./bage.module.css";
import { useAppSelector } from "@hooks/typed-redux-hooks";
import { basketSliceSelect } from "@redux/slices/basket-slice/basket-slice-selectors";

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
// сделать енам
// опт
export const Bage: FC<BageProps> = ({ discount, type = bageType.card }) => {
	const quantityGoodsInBasket = useAppSelector(basketSliceSelect);

	if (type === bageType.card) {
		return <div className={styles.bage_container_card}>{discount}%</div>;
	} else if (type === bageType.basket && quantityGoodsInBasket.length) {
		const quantityGoodsMaxCount =
			quantityGoodsInBasket.length <= maxGoodsCount
				? quantityGoodsInBasket.length
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
