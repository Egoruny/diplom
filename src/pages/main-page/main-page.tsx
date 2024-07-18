import { Carusel } from "../../components/carusel/carusel";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { WrapComponent } from "../../components/wrap-component/wrap-component";
import { ProductCard } from "../../components/product-card/product-card";

import { useAppSelector } from "../../hooks/typed-redux-hooks";

import phone from "../../assets/Mask-group.svg";

import { titles } from "../../utils/constans/titles";

import { productsSelect } from "@redux/slices/product-slice/product-slice-selectors";

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

const src =
	"https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230728141253382378/231101110014798619.jpg@webp";

export const MainPage = () => {
	const discountData = useAppSelector(productsSelect);
	return (
		<main className={styles.main_page_container}>
			<Carusel>
				<Carusel.Item>
					<div className={styles.item1}>
						<figure className={styles.container_img}>
							<img src={src} alt="colonka" />
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
				{discountData.map(item => (
					<ProductCard {...item} key={item.id} />
				))}
			</WrapComponent>
		</main>
	);
};
