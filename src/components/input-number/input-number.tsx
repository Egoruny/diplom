import { FC } from "react";
import { Button } from "@components/button/button";
import styles from "./input-number.module.css";

type InputNumberProps = {
	onIncrement:() =>void
	onDecrement:() =>void
	value:number
}

export const InputNumber:FC<InputNumberProps> = ({onIncrement,onDecrement,value}) => {




	return (
		<div className={styles.quantity_block}>
			<Button type="defult" text="-" onClick={onDecrement} />
			<input
				className={styles.quantity_num}
				type="number"
				value={value}
				readOnly
			/>
			<Button type="defult" text="+" onClick={onIncrement} />
		</div>
	);
};
