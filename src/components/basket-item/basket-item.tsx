// import { useForm, SubmitHandler } from "react-hook-form";
import { FC,useEffect,useState } from "react";
import { PriceAria } from "@components/price-aria/price-aria";
import { InputNumber } from "@components/input-number/input-number";

import { useAppDispatch } from "@hooks/typed-redux-hooks";

import { setCountItem } from "@redux/slices/basket-slice/basket-slice";


import styles from "./basket-item.module.css";

type BasketItemProps = {
	id: string;
	discount: number;
	imageSrc: string;
	price: number;
	productDiscription: string;
	inBasketCount: number;
	checkboxHandler:(id:string) => void
};



export const BasketItem: FC<BasketItemProps> = ({
	id,
	discount,
	imageSrc,
	price,
	productDiscription,
	inBasketCount,
	checkboxHandler
}) => {
	const dispatch = useAppDispatch();
	const [inputValue,setInputValue] = useState(inBasketCount)
	const priceWhithCount = price * inBasketCount;



	const inc = () => {
		setInputValue(prevValue => prevValue + 1)
	}
	const dec = () => {
		setInputValue(prevValue => prevValue === 1? 1:prevValue- 1)
	}



	useEffect(() => {
		dispatch(setCountItem({id,value:inputValue}))
	},[id,inputValue,dispatch])


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
					<input type="checkbox" onChange={() => checkboxHandler(id)}/>
				</div>
			</div>
			<div className={styles.bottom_panel}>
				<InputNumber onIncrement={inc} onDecrement={dec} value={inputValue} />
			</div>
		</div>
	);
};
