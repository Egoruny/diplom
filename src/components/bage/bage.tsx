import styles from "./bage.module.css";

type BageProps = {
	discount?: number;
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
};

export const Bage = ({ discount, top, left, right, bottom }: BageProps) => {
	return (
		<div
			className={styles.bage_container}
			style={{ top: top, left: left, right: right, bottom: bottom }}
		>
			{discount}%
		</div>
	);
};
