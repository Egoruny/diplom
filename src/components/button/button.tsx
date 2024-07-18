import { FC, ReactNode } from "react";
import { SyntheticEvent } from "react";
import cn from "classnames";
import styles from "./button.module.css";

type ButtonProps = {
	text?: string | ReactNode ;
	type?: "primary" | "blue" | "defult" | "text";
	size?: "middle" | "large" | "small";
	onClick?: (e: SyntheticEvent) => void;
	icon?: string;
	className?: string;
	shape?: boolean;
	iconSize?: number;
	disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
	text,
	type = "primary",
	size = "middle",
	onClick = () => {},
	icon = "",
	className,
	shape = false,
	iconSize = 20,
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={cn(className, styles[type], styles[size], {
				[styles.shape]: shape,
				[styles.disabled]: disabled,
			})}
		>
			{icon && (
				<img
					src={icon}
					width={iconSize}
					height={iconSize}
					alt="btn-icon"
				/>
			)}
			{text}
		</button>
	);
};
