import { FC } from "react";
import { useEffect, useContext } from "react";

import { CaruselContext } from "../carusel-context";

import styles from "./carusel-item.module.css";

export type CaruselItemProps = {
	children: JSX.Element;
};



export const CaruselItem:FC<CaruselItemProps> = ({ children }) => {
	const { setChildrenCounter } = useContext(CaruselContext);

	useEffect(() => {
		setChildrenCounter(curr => curr + 1);
	}, []);

	return <div className={styles.carusel_item}>{children}</div>;
};
