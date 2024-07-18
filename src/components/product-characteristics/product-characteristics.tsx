import { FC } from "react";
import { CharacteristicsType } from "@types/product-type";
import styles from "./product-characteristics.module.css";

type ProductCharacteristicsProps = {
	characteristicsItems: CharacteristicsType[];
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
				{characteristicsItems.map(({ left, right },index) => (
					<li key={index}>
						{left}______{right}
					</li>
				))}
			</ul>
		</div>
	);
};
