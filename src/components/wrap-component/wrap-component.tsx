import { FC, useState, useEffect } from "react";
import { ReactNode } from "react";

import { Button } from "@components/button/button";
import rigtBtnIcon from "../../assets/Frame1.svg";
import leftBtnIcon from "../../assets/Frame2.svg";

import cn from "classnames";

import styles from "./wrap-component.module.css";

type WrapComponentProps = {
	text: string;
	children: ReactNode;
	bordered?: boolean;
};

export const WrapComponent: FC<WrapComponentProps> = ({
	text,
	children,
	bordered = false,
}) => {
	return (
		<div
			className={cn(styles.main_container, { [styles.border]: bordered })}
		>
			{/* <Button
				type="defult"
				icon={rigtBtnIcon}
				className={styles.right}
				iconSize={40}
			/> */}
			<h2>{text}</h2>
			<div className={styles.row_container}>{children}</div>
		</div>
	);
};
