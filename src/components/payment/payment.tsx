import { Button } from "@components/button/button";
import { FaPlus } from "react-icons/fa6";

import styles from "./payment.module.css";

export const Payment = ({ title }) => {
	return (
		<div className={styles.main_container}>
			<h4>{title}</h4>
			<div className={styles.online_pay}>Оплата только online!!</div>
		
			<Button
				className={styles.btn_new_cerd}
				type="defult"
				text="Новая карта"
				icon={<FaPlus />}
			/>
		</div>
	);
};
