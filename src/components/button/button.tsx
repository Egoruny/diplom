import cn from "classnames";
import styles from "./button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	type?: "primary" | "blue" | "defult";
	size?: "middle" | "large" | "small";
};

export const Button = ({
	children,
	type = "primary",
	size = "middle",
}: ButtonProps) => {

	const isCorrectBtnType = type === "primary" || type === "blue" || type === "defult";
	const isCorrectBtnSize = size === "middle" || size === "small" || size === "large";

	return (
		<button
			className={cn(
				styles[`${isCorrectBtnType ? type : "primary"}`],
				styles[`${isCorrectBtnSize ?size:"middle"}`],
			)}
		>
			{children}
		</button>
	);
};
