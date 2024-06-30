import { Carusel } from "../../components/carusel/carusel";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { WrapComponent } from "../../components/wrap-component/wrap-component";
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




export const MainPage = () => {
	return (
		<main>
			<Carusel>
				<div className={styles.item1}>item1</div>
				<div className={styles.item2}>item2</div>
				<div className={styles.item3}>item3</div>
			</Carusel>
			<WrapComponent text={titles.catalogTitle}>
				{catalogData.map(item => (
					<CatalogItem {...item} />
				))}
			</WrapComponent>
		</main>
	);
};
