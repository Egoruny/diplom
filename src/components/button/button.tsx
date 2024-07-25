import { FC, ReactNode } from "react";
import { SyntheticEvent } from "react";
import cn from "classnames";
import styles from "./button.module.css";

type ButtonProps = {
	text?: string | ReactNode;
	type?: "primary" | "blue" | "defult" | "text";
	size?: "middle" | "large" | "small";
	onClick?: (e: SyntheticEvent) => void;
	icon?: ReactNode;
	className?: string;
	shape?: boolean;
	disabled?: boolean;
	htmlType?: "button" | "submit" | "reset";
	form?: string;
};

export const Button: FC<ButtonProps> = ({
	text,
	type = "primary",
	size = "middle",
	onClick = () => {},
	icon = "",
	className,
	shape = false,
	disabled = false,
	htmlType = "button",
	form,
	...attrs
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={cn(className, styles[type], styles[size], {
				[styles.shape]: shape,
				[styles.disabled]: disabled,
			})}
			type={htmlType}
			form={form}
			{...attrs}
		>
			{icon && (
			icon
			)}
			{text}
		</button>
	);
};
