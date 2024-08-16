import { FC, useEffect, useState,memo } from "react";


import { PriceAria } from "@components/price-aria/price-aria";
import { InputNumber } from "@components/input-number/input-number";
import { Button } from "@components/button/button";



import { MdDelete } from "react-icons/md";

import styles from "./basket-item.module.css";



type BasketItemProps = {
	id: number;
	discount: number;
	img: string;
	price: number;
	name: string;
	inBasketCount: number;
	deleteItem: (id: number) => void;
	setCountItem: (id:number,value:number) => void;
};

export const BasketItem: FC<BasketItemProps> = ({
	id,
	discount,
	img,
	price,
	name,
	inBasketCount,
	deleteItem,
	setCountItem,
}) => {
	const [inputValue, setInputValue] = useState(inBasketCount);
	const priceWhithCount = price * inBasketCount;

	const incBasketCount = () => {
		setInputValue(prevValue => prevValue + 1);
	};
	const decBasketCount = () => {
		setInputValue(prevValue => (prevValue === 1 ? 1 : prevValue - 1));
	};


	useEffect(() => {
		setCountItem(id,inputValue);
	}, [id, inputValue]);

	return (
		<div className={styles.container}>
			<div className={styles.top_panel}>
				<figure className={styles.picture}>
					<img src={img} alt="phone" />
				</figure>
				<div className={styles.discription}>
					<p>{name}</p>
					<PriceAria price={priceWhithCount} discount={discount} />
				</div>
				<div>
				</div>
			</div>
			<div className={styles.bottom_panel}>
				<Button
					icon={<MdDelete className={styles.icon}/>}
					type="defult"
					size="small"
					onClick={() => deleteItem(id)}
				/>
				<InputNumber
					onIncrement={incBasketCount}
					onDecrement={decBasketCount}
					value={inputValue}
				/>
			</div>
		</div>
	);
};
