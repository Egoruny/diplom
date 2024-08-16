import { AiOutlineRight } from "react-icons/ai";

import { Button } from "@components/button/button";

import classNames from "classnames";

import styles from "./choice-delivery-method.module.css";

export const ChoiseDeliveryMethod = ({ isOrder = true, onClick }) => {
	return (
		<div className={classNames(styles.wrapp,{[styles.wrappOrder]:isOrder})}>
			<Button
				type="defult"
				className={styles.choise_btn}
				text={isOrder ? "Доставка курьером" : "Самовывоз"}
				icon={<AiOutlineRight />}
                onClick={onClick}
			/>
			{!isOrder && <h3>Бейкер-стрит, 221b</h3>}
		</div>
	);
};
