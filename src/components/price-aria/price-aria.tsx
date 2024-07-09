import { FC } from "react";
import { calcDiscount } from "../../utils/discount/calc-discount";

import styles from "./price-aria.module.css";

type PriceAriaProps = {
	price: number;
	discount?: number;
};

export const PriceAria:FC<PriceAriaProps> = ({ price, discount }) => (
	<div className={styles.container}>
		<h3>{calcDiscount(price, discount)} BYN</h3>
		{discount && <p>{price} BYN</p>}
	</div>
);
