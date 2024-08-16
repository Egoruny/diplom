import {FC} from 'react'

import styles from "./payment.module.css";

type PaymentProps = {
	title:string
}

export const Payment:FC<PaymentProps> = ({ title }) => {
	return (
		<div className={styles.main_container}>
			<h4>{title}</h4>
			<div className={styles.online_pay}>Оплата только наличными!!</div>
	
		</div>
	);
};
