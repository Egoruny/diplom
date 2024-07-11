import { Carusel } from "../../components/carusel/carusel";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { WrapComponent } from "../../components/wrap-component/wrap-component";
import { ProductCard } from "../../components/product-card/product-card";

import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/constans/path";
import { useAppDispatch } from "../../hooks/typed-redux-hooks";
import { setSelectedProduct } from "../../redux/slices/product-slice/product-slice";

import phone from "../../assets/Mask-group.svg";
import { titles } from "../../utils/constans/titles";

import styles from "./main-page.module.css";

const catalogData = [
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
	{
		imageSrc: phone,
		catalogName: "Телефоны",
	},
];

const src = "https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230728141253382378/231101110014798619.jpg@webp"

const discountData = [
	{
		productDiscription: "Смартфон Apple Iphobne14 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: false,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		productDiscription: "Смартфон Apple Iphobne14 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: true,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		productDiscription: "Смартфон Apple Iphobne14 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: false,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		productDiscription: "Смартфон Apple Iphobne14 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: true,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
	{
		productDiscription: "Смартфон Apple Iphobne14 128GB",
		price: Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500,
		discount: Math.floor(Math.random() * 21),
		isAvalible: true,
		imageSrc:
			"https://xistore.by/upload/resize/element/142137/bcf/ad30c91c898dcf8e3ba32e9af58959aa_482_482_80.jpg",
		characteristics: [
			{ left: "Экран", right: "6.1/2323 x 1200" },
			{ left: "Количество ядер", right: 4 },
			{ left: "Мощность блока", right: "20BT" },
			{ left: "Оперативная память", right: "6GB" },
			{ left: "Встроеная память", right: "28GB" },
			{ left: "Основная камера", right: "64/2" },
		],
		colors: [{ color: "красный" }, { color: "белый" }, { color: "черный" }],
	},
];

export const MainPage = () => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const showProductPage = selectedProduct => {
		dispatch(setSelectedProduct(selectedProduct));
		navigate(PATH.ProductPage);
	};

	return (
		<main className={styles.main_page_container}>
			<Carusel>
				<Carusel.Item>
					<div className={styles.item1}>
						<figure className={styles.container_img}>
						<img
							src={src}
							alt="colonka"
						/>
						</figure>
						<div className={styles.title_container}>
							<h2>Умная колонка</h2>
							<div className={styles.text}>
								<h3>Скидка 30%</h3>
								<p>при покупке второго товара</p>
							</div>
						</div>
					</div>
				</Carusel.Item>
				<Carusel.Item>
					<div className={styles.item2}>item2</div>
				</Carusel.Item>
				<Carusel.Item>
					<div className={styles.item3}>item3</div>
				</Carusel.Item>
			</Carusel>
			<WrapComponent text={titles.catalogTitle}>
				{catalogData.map((item, index) => (
					<CatalogItem {...item} key={index} />
				))}
			</WrapComponent>
			<WrapComponent text={titles.stockTitle} bordered>
				{discountData.map((item, index) => (
					<ProductCard
						{...item}
						key={index}
						onClickCard={showProductPage}
					/>
				))}
			</WrapComponent>
		</main>
	);
};
