 import React from "react";
import {
	createContext,
	useState,
	useEffect,
	Children,
} from "react";
import { Button } from "@components/button/button";
import rigtBtnIcon from "../../assets/Frame1.svg";
import leftBtnIcon from "../../assets/Frame2.svg";

import styles from "./carusel.module.css";

const childWidth = 100;

const interval = 5000;

const iconSize = 40;

type ItervalType = NodeJS.Timeout | undefined;

const CaruselContext = createContext({});

export const Carusel = ({ children }) => {
	const [children2, setChildren2] = useState([]);
	const [childrenState, setChildrenState] = useState([]);
	const [offset, setOffset] = useState(0);
	const [shoodShowBtn, setShoodShowBtn] = useState(false);

	const onClickRightBtn = () => {
		const maxOffset = -(childWidth * (childrenState.length - 1));
		console.log(maxOffset)
		setOffset(currenOffset => {
			if (maxOffset === currenOffset) {
				return 0;
			}
			return Math.max(currenOffset - childWidth, maxOffset);
		});
	};
	console.log(offset)

	const onClickLeftBtn = () => {
		setOffset(currenOffset => Math.min(currenOffset + childWidth, 0));
	};

	const enterMouseCarusel = () => {
		setShoodShowBtn(true);
	};

	const leaveMouseCarusel = () => {
		setShoodShowBtn(false);
	};

	// useEffect(() => {
	// 	setChildrenState(
	// 		Children.map(children, child =>
	// 			cloneElement(child, {
	// 				style: {
	// 					height: oneHundredPercent,
	// 					minWidth: oneHundredPercent,
	// 					maxWidth: oneHundredPercent,
	// 				},
	// 			})
	// 		)
	// 	);
	// }, [children]);

	const setMyClientWdith = (width, id) => {};

	useEffect(() => {
		let intervalId:ItervalType;
		if (childrenState.length && !shoodShowBtn) {
			intervalId = setInterval(onClickRightBtn, interval);
		} else {
			clearInterval(intervalId);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [childrenState, shoodShowBtn]);

	return (
		<CaruselContext.Provider value={{ setMyClientWdith }}>
			<div
				className={styles.container}
				onMouseEnter={enterMouseCarusel}
				onMouseLeave={leaveMouseCarusel}
			>
				{shoodShowBtn && (
					<Button
						type="defult"
						icon={rigtBtnIcon}
						onClick={onClickRightBtn}
						className={styles.right}
						iconSize={iconSize}
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
						icon={leftBtnIcon}
						onClick={onClickLeftBtn}
						className={styles.left}
						iconSize={iconSize}
					/>
				)}
			</div>
		</CaruselContext.Provider>
	);
};

Carusel.Item = ({ children }) => {
	return <div className={styles.carusel_item}>{children}</div>;
};
