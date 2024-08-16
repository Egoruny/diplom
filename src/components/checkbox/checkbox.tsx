import { FC } from "react";

import styles from "./checkbox.module.css";

type CheckboxType = {
	text: string;
	onChange:() => void
};

export const Checkbox: FC<CheckboxType> = ({ text,onChange }) => {
	return (
		<div>
			<label className={styles.checkbox}>
				<input
					onChange={onChange}
					type="checkbox"
					name="color"
					className={styles.checkbox}
				/>
				{text}
			</label>
		</div>
	);
};
