import { FC } from "react";
import { PriceAria } from "../../components/price-aria/price-aria";
import { Button } from "../../components/button/button";
import { Bage } from "../../components/bage/bage";


import { titles } from "../../utils/constans/titles";

import styles from "./product-card.module.css";

const available = "в наличии";

const notAvailable = "нет в наличии";

const imageSize = 200;

type ProductCardProps = {
	productDiscription: string;
	price: number;
	discount?: number;
	isAvalible: boolean;
	imageSrc: string;
	onClickCard:(arg:any) => void
	characteristics:any
	colors:any
};

export const ProductCard:FC<ProductCardProps> = ({
	productDiscription,
	price,
	discount,
	isAvalible,
	imageSrc,
	characteristics,
	colors,
	onClickCard
}) => {


	return (
		<div className={styles.card_container} onClick={() => onClickCard({price,productDiscription,imageSrc,characteristics,colors,discount})}>
			<figure className={styles.img_container}>
				<img src={imageSrc} width={imageSize} height={imageSize} className={styles.card_img} />
			</figure>
			<h4>{productDiscription}</h4>
			<PriceAria price={price} discount={discount} />
			<p
				className={
					styles[`${isAvalible ? "is_avalible" : "is_not_avalible"}`]
				}
			>
				{isAvalible ? available : notAvailable}
			</p>
			<Button text={titles.inBasketTitle} type="primary"/>
			<Bage discount={discount} right={0}/>
		</div>
	);
};
