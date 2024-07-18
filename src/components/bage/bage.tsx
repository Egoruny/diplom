import { FC } from "react";
import styles from "./bage.module.css";
import { useAppSelector } from "@hooks/typed-redux-hooks";
import { basketSliceSelect } from "@redux/slices/basket-slice/basket-slice-selectors";

type BageProps = {
	discount?: number;
	type: "basket" | "card";
	quantityGoodsINBasket?: number;
};
// сделать енам 
// опт
export const Bage: FC<BageProps> = ({ discount, type = "card" }) => {

	const quantityGoodsINBasket = useAppSelector(basketSliceSelect)

	if (type === "card") {
		return <div className={styles.bage_container_card}>{discount}%</div>;
	} else if (type === "basket" && quantityGoodsINBasket.length) {
		return <div className={styles.bage_container_basket}>{quantityGoodsINBasket.length <= 9?quantityGoodsINBasket.length:9 + '+'}</div>;
	}
};
