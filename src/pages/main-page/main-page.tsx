import { useEffect } from "react";
import { Carusel } from "../../components/carusel/carusel";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { WrapComponent } from "../../components/wrap-component/wrap-component";
import { ProductCard } from "../../components/product-card/product-card";
import { instance } from "../../axios/axios";

import { v4 as uuidv4 } from 'uuid'

import { useAppSelector,useAppDispatch } from "../../hooks/typed-redux-hooks";

import phone from "../../assets/Mask-group.svg";

import { titles } from "../../utils/constans/titles";

import { productsSelect,productTypeSelect } from "@redux/slices/product-slice/product-slice-selectors";

import { getProductTypes,getDiscountProduct } from "@redux/async-actions";

import styles from "./main-page.module.css";

console.log(uuidv4())



const src ="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230728141253382378/231101110014798619.jpg@webp";

const onTestServer = () => {
	// fetch('http://localhost:5000/api/brand',{
	// 	method:'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json' 
	// 	},
	// 	body: JSON.stringify({
	// 		name: 'apple'
	// 	})
	// })
	// .then(data => {
	// 	console.log(data)
	// })

	// .then(data => console.log(data))

	// instance.get('device/1')
	// .then(data => console.log(data.data))
}

export const MainPage = () => {
	const dispatch = useAppDispatch()
	const discountData = useAppSelector(productsSelect);
	const productTypes = useAppSelector(productTypeSelect)



	useEffect(() => {
		dispatch(getProductTypes())
		dispatch(getDiscountProduct())
	},[])




	return (
		<main className={styles.main_page_container}>
		<button onClick={onTestServer}>test server</button>
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
				{productTypes.map((item) => (
					<CatalogItem catalogName={item.name} imageSrc={phone} key={item.id} id={item.id}/>
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
