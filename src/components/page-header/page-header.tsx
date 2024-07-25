import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@components/button/button";
import { Breadcrambs } from "@components/breadcrambs/breadcrambs";

import { AiOutlineLeft } from "react-icons/ai";

import styles from "./page-header.module.css";

type PageHeaderProps = {
    title:string
}

export const PageHeader:FC<PageHeaderProps> = ({title}) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
    
	return (
		<div className={styles.product_page_header}>
			<Breadcrambs/>
			<Button
				type="defult"
				className={styles.back_btn}
				icon={<AiOutlineLeft className={styles.icon}/>}
				size="small"
				onClick={goBack}
				text={<h2>{title}</h2>}
			/>
		</div>
	);
};
