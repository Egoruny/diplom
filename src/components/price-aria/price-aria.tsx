import { culckDiscount } from "../../utils/healper/culck-discount";

import styles from "./price-aria.module.css";

type PriceAriaProps = {
	price: number;
	discount?: number;
};

export const PriceAria = ({ price, discount }: PriceAriaProps) => (
	<div className={styles.container}>
		<h3>{culckDiscount(price, discount)} BYN</h3>
		{discount && <p>{price} BYN</p>}
	</div>
);
