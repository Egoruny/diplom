import { SyntheticEvent } from "react";
import cn from "classnames";
import styles from "./button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
	children?: ReactNode;
	type?: "primary" | "blue" | "defult" | "text";
	size?: "middle" | "large" | "small";
	onClick?: (e: SyntheticEvent) => void;
	icon?: string;
	className?: string;
	shape?:boolean
};

const iconSize = 20;

export const Button = ({
	children,
	type = "primary",
	size = "middle",
	onClick = () => {},
	icon = "",
	className,
	shape
}: ButtonProps) => {
	const isCorrectBtnType =
		type === "primary" ||
		type === "blue" ||
		type === "defult" ||
		type === "text";

	const isCorrectBtnSize = size === "middle" || size === "small" || size === "large";

	return (
		<button
			onClick={e => onClick(e)}
			className={cn(
				className,
				styles[`${isCorrectBtnType ? type : "primary"}`],
				styles[`${isCorrectBtnSize ? size : "middle"}`],
				styles[`${shape ? styles.shape : null}`],
				{[styles.shape]:shape}
			)}
		>
			{icon && <img src={icon} width={iconSize} height={iconSize} alt="btn-icon" />}
			{children}
		</button>
	);
};
