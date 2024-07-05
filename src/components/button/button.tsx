import  { SyntheticEvent } from 'react';
import cn from "classnames";
import styles from "./button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	type?: "primary" | "blue" | "defult";
	size?: "middle" | "large" | "small";
	onClick?:(arg:SyntheticEvent ) => void
};

export const Button = ({
	children,
	type = "primary",
	size = "middle",
	onClick,
}: ButtonProps) => {

	const isCorrectBtnType = type === "primary" || type === "blue" || type === "defult";
	const isCorrectBtnSize = size === "middle" || size === "small" || size === "large";

	return (
		<button
		onClick={(e) => onClick(e)}
			className={cn(
				styles[`${isCorrectBtnType ? type : "primary"}`],
				styles[`${isCorrectBtnSize ?size:"middle"}`],
			)}
		>
			{children}
		</button>
	);
};
