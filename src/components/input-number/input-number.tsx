import { FC } from "react";
import { useState } from "react";
import { Button } from "@components/button/button";
import styles from "./input-number.module.css";

type InputNumberProps = {
	onChange:(value:number) =>void
}

export const InputNumber:FC<InputNumberProps> = ({onChange}) => {
	const [value, setValue] = useState(1);

	const increment = () => {
		setValue(prev => prev + 1);
	};

	const decrement = () => {
		value === 1 ? setValue(1) : setValue(prev => prev - 1);
	};

	return (
		<div className={styles.quantity_block}>
			<Button type="defult" text="-" onClick={decrement} />
			<input
				onChange={onChange(value)}
				className={styles.quantity_num}
				type="number"
				value={value}
			/>
			<Button type="defult" text="+" onClick={increment} />
		</div>
	);
};
