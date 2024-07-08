import React from "react";
import styles from "./bage.module.css";

type BageProps = {
	discount?: number;
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
};

export const Bage: React.FC<BageProps> = ({
	discount,
	top,
	left,
	right,
	bottom,
}) => {
	return (
		<div
			className={styles.bage_container}
			// TODO: пересотреть подход к компоненту Badge сделать по аналогии с кнопкой
			style={{ top, left, right, bottom }}
		>
			{discount}%
		</div>
	);
};
