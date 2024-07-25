import { FC, useEffect, useState,memo } from "react";


import { PriceAria } from "@components/price-aria/price-aria";
import { InputNumber } from "@components/input-number/input-number";
import { Button } from "@components/button/button";



import { MdDelete } from "react-icons/md";

import styles from "./basket-item.module.css";



type BasketItemProps = {
	id: string;
	discount: number;
	imageSrc: string;
	price: number;
	productDiscription: string;
	inBasketCount: number;
	deleteItem: (id: string) => void;
	setCountItem: (id:string,value:number) => void;
};

export const BasketItem: FC<BasketItemProps> = ({
	id,
	discount,
	imageSrc,
	price,
	productDiscription,
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
					<img src={imageSrc} alt="phone" />
				</figure>
				<div className={styles.discription}>
					<p>{productDiscription}</p>
					<PriceAria price={priceWhithCount} discount={discount} />
				</div>
				<div>
					{/* <input
						type="checkbox"
						onChange={() => checkboxHandler(id)}
					/> */}
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
