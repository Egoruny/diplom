import { FC } from "react";
import { calcDiscount } from "../../utils/discount/calc-discount";

import styles from "./price-aria.module.css";

type PriceAriaProps = {
	price: number;
	discount: number;
};

const byn = "BYN";

export const PriceAria: FC<PriceAriaProps> = ({ price, discount }) => (
	<div className={styles.container}>
		<h3>
			{calcDiscount(price, discount)}
			{byn}
		</h3>
		{Boolean(discount) && (
			<p>
				{price}
				{byn}
			</p>
		)}
	</div>
);
