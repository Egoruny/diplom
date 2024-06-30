import { useState, useEffect, Children, cloneElement } from "react";
import styles from "./carusel.module.css";

const oneHundredPercent = "100%";

const childWidth = 450;

export const Carusel = ({ children }) => {
	const [childrenState, setChildrenState] = useState([]);
	const [offset, setOffset] = useState(0);


	const onClickRightBtn = () => {
		const maxOffset = -(childWidth * (childrenState.length - 1));

		setOffset(currenOffset => Math.max(currenOffset - childWidth, maxOffset)
		);
	};

	const onClickLeftBtn = () => {
		setOffset(currenOffset => Math.min(currenOffset + childWidth, 0));
	};

	useEffect(() => {
		setChildrenState(
			Children.map(children, (child)=>
				cloneElement(child, {
					style: {
						height: oneHundredPercent,
						minWidth: childWidth,
						maxWidth: childWidth,
					},
				})
			)
		);
	}, [children]);

	return (
		<div className={styles.container}>
			<button className={styles.right} onClick={onClickRightBtn}>
				right
			</button>
			<div className={styles.window}>
				<div
					className={styles.all_items_container}
					style={{
						transform: `translateX(${offset}px)`,
					}}
				>
					{childrenState}
				</div>
			</div>
			<button className={styles.left} onClick={onClickLeftBtn}>
				left
			</button>
		</div>
	);
};
