import {FC} from "react";
import styles from "./input-castom.module.css";

type InputCastomProps = {
	type?: string;
};

export const InputCastom:FC<InputCastomProps> = ({ type = "text" }) => {
	return (
		<div className={styles.input_field}>
			<input className={styles.input_header} type={type} />
			<div className={styles.icon_field}>
				<i className={styles.fa}></i>
				<span>поиск</span>
			</div>
		</div>
	);
};
