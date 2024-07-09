import { FC } from "react";
import { ReactNode } from "react";
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
			<h2>{text}</h2>
			<div className={styles.row_container}>{children}</div>
		</div>
	);
};
