import cn from "classnames";
import styles from "./button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	type?: "primary" | "blue";
	size?: "middle" | "large";
};

export const Button = ({
	children,
	type = "primary",
	size = "middle",
}: ButtonProps) => {

	const isCorrectBtnType = type === "primary" || type === "blue";
	const isCorrectBtnSize = size === "middle";

	return (
		<button
			className={cn(
				styles[`${isCorrectBtnType ? type : "primary"}`],
				styles[`${isCorrectBtnSize ?size:"middle"}`],
				{
					[styles.test]: false,
				}
			)}
		>
			{children}
		</button>
	);
};
