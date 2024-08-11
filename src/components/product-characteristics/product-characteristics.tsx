import { FC } from "react";
import { InfoType } from "@types/product-type";
import styles from "./product-characteristics.module.css";

type ProductCharacteristicsProps = {
	characteristicsItems: InfoType[];
};

const title = "Характеристики:";

export const ProductCharacteristics: FC<ProductCharacteristicsProps> = ({
	characteristicsItems,
}) => {
	return (
		<div className={styles.characteristics}>
			<ul>
				<li>
					<h4>{title}</h4>
				</li>
				{characteristicsItems.map(({ title, description },index) => (
					<li key={index}>
						{title}______{description}
					</li>
				))}
			</ul>
		</div>
	);
};
