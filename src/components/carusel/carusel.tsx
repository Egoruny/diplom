import { FC, ReactNode } from "react";
import { useState, useEffect } from "react";
import { Button } from "@components/button/button";
import { AiFillCaretRight,AiFillCaretLeft  } from "react-icons/ai";

import { CaruselItem } from "./carusel-item/carusel-item";

import { CaruselContext } from "./carusel-context";
import { CaruselItemProps } from "./carusel-item/carusel-item";

import styles from "./carusel.module.css";

const childWidth = 100;

const interval = 3000;



type ItervalType = NodeJS.Timeout | undefined;

type CaruselProps = {
	children: JSX.Element[];
};

export const Carusel:FC<CaruselProps> & { Item: FC<CaruselItemProps> } = ({ children }) => {
	const [childrenCounter, setChildrenCounter] = useState(0);
	const [, setSlideCount] = useState(0);
	const [offset, setOffset] = useState(0);
	const [shoodShowBtn, setShoodShowBtn] = useState(false);

	const value = {
		childrenCounter,
		setChildrenCounter,
	};

	const rightSlide = () => {
		const maxOffset = -(childWidth * childrenCounter);

		setOffset(currenOffset => {
			return Math.max(currenOffset - childWidth, maxOffset);
		});

		setSlideCount(prev => {
			if (prev >= childrenCounter - 1) {
				setOffset(0);
				return 0;
			}

			return prev + 1;
		});
	};

	const leftSlide = () => {
		setOffset(currenOffset => Math.min(currenOffset + childWidth, 0));
		setSlideCount(prev => Math.max(prev - 1, 0));
	};

	const enterMouseCarusel = () => {
		setShoodShowBtn(true);
	};

	const leaveMouseCarusel = () => {
		setShoodShowBtn(false);
	};

	useEffect(() => {
		let intervalId: ItervalType;
		if (!shoodShowBtn && childrenCounter) {
			intervalId = setInterval(rightSlide, interval);
		} else {
			clearInterval(intervalId);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [shoodShowBtn, childrenCounter]);

	return (
		<CaruselContext.Provider value={value}>
			<div
				className={styles.container}
				onMouseEnter={enterMouseCarusel}
				onMouseLeave={leaveMouseCarusel}
			>
				{shoodShowBtn && (
					<Button
						type="defult"
						icon={<AiFillCaretRight className={styles.icon} />}
						onClick={rightSlide}
						className={styles.right}
					/>
				)}
				<div className={styles.window}>
					<div
						className={styles.all_items_container}
						style={{
							transform: `translateX(${offset}%)`,
						}}
					>
						{children}
					</div>
				</div>
				{shoodShowBtn && (
					<Button
						type="defult"
						icon={<AiFillCaretLeft className={styles.icon}/>}
						onClick={leftSlide}
						className={styles.left}
					/>
				)}
			</div>
		</CaruselContext.Provider>
	);
};

Carusel.Item = CaruselItem;
