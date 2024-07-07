import { useAppSelector } from "../../hooks/typed-redux-hooks";
import { useNavigate } from "react-router-dom";
import { selectedProductSelect } from "../../redux/slices/product-slice/product-slice-selectors";
import { Button } from "../../components/button/button";
import backIcon from "../../assets/back.svg";
import phone from "../../assets/Mask-group.svg";

import styles from "./product-page.module.css";

export const ProductPage = () => {
	const selectedProduct = useAppSelector(selectedProductSelect);
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			<header className={styles.product_page_header}>
				<Button
					type="defult"
					className={styles.back_btn}
					icon={backIcon}
					size="small"
					onClick={goBack}
				/>
				<h2>Карточка товара</h2>
			</header>
			<div className={styles.product_container}>
				<img
					src="https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg"
					alt="product"
					width={400}
					height={600}
				/>

				<div className={styles.product_characteristics_container}>
					<h1>sdadgafghfhdfghdfghdfhdfg</h1>
					<div className={styles.chenge_color_container}>
						<span>цвет:черный</span>
						<div className={styles.radio_groupe}>
							<input type="radio" />
							<input type="radio" />
							<input type="radio" />
						</div>
					</div>
					<div className={styles.characteristics}>
						<ul>
							<li>
								<h4>Характеристики:</h4>
							</li>
							<li>Экран_____________такой то</li>
							<li>Количество ядер_____________такой то</li>
							<li>Мощность блока_____________такой то</li>
							<li>Оперативная память_____________такой то</li>
							<li>Встроеная память_____________такой то</li>
							<li>Основная камера память_____________такой то</li>
						</ul>
					</div>
				</div>

				<div className={styles.prise_container}>
					<p>7999999BY</p>
					<Button size="large">В корзину</Button>
				</div>
			</div>
		</>
	);
};
