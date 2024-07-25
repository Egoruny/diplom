import { FC } from "react";
import { PriceAria } from "@components/price-aria/price-aria";
import { Button } from "@components/button/button";

import styles from "./total-price.module.css";

type TotalPriceProps = {
	price: number;
	discount: number;
	btnText: string;
	onClick?: () => void;
	title?: string;
	disabledBtn?: boolean;
    formName?:string
    btnType?:"submit" | "button" | "reset"
};

export const TotalPrice: FC<TotalPriceProps> = ({
	price,
	discount,
	btnText,
	onClick,
	title = "",
	disabledBtn = false,
	formName,
	btnType = "submit",
}) => {
	return (
		<div className={styles.prise_container}>
			{title && <h3>{title}</h3>}
			<PriceAria price={price} discount={discount} />
			<Button
				size="large"
				text={btnText}
				onClick={onClick}
				disabled={disabledBtn}
                form={formName}
                htmlType={btnType}
			/>
		</div>
	);
};
