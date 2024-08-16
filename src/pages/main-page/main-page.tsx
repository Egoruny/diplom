import { useEffect } from "react";
import { Carusel } from "../../components/carusel/carusel";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { WrapComponent } from "../../components/wrap-component/wrap-component";
import { ProductCard } from "../../components/product-card/product-card";


import { useAppSelector,useAppDispatch } from "../../hooks/typed-redux-hooks";

import phone from "../../assets/Mask-group.svg";
import noteboke from "../../assets/booknote.png";
import comp from "../../assets/comp.png";
import telek from "../../assets/teleck.png";
import colonka from "../../assets/colonka.png"; 

import { titles } from "../../utils/constans/titles";

import { productsSelect,productTypeSelect } from "@redux/slices/product-slice/product-slice-selectors";

import { getProductTypes,getDiscountProduct } from "@redux/async-actions";

import styles from "./main-page.module.css";



const srcs = [phone,noteboke,comp,telek,colonka]
const src ="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230728141253382378/231101110014798619.jpg@webp";



export const MainPage = () => {
	const dispatch = useAppDispatch()
	const discountData = useAppSelector(productsSelect);
	const productTypes = useAppSelector(productTypeSelect)
	const newProducTypes = productTypes.map((item,i) => {
		return {...item,img:srcs[i]}
	})



	useEffect(() => {
		dispatch(getProductTypes())
		dispatch(getDiscountProduct())
	},[])




	




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
					<div className={styles.item1}>
						<figure className={styles.container_img}>
							<img src={ "https://mobilworld.by/upload/iblock/c19/c19cad549cf44ac5be3c4e7f9be49056.png"} alt="тел" />
						</figure>
						<div className={styles.title_container}>
							<h2>Телефон</h2>
							<div className={styles.text}>
								<h3>Скидка 30%</h3>
								<p>при покупке второго товара</p>
							</div>
						</div>
					</div>
				</Carusel.Item>
				<Carusel.Item>
					<div className={styles.item1}>
						<figure className={styles.container_img}>
							<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTOhhZdjLcdqsoj34u2hgZCQw4w6vHqQRWw&s'} alt="note" />
						</figure>
						<div className={styles.title_container}>
							<h2>ноутбук</h2>
							<div className={styles.text}>
								<h3>Скидка 30%</h3>
								<p>при покупке второго товара</p>
							</div>
						</div>
					</div>
				</Carusel.Item>

			</Carusel>
			<WrapComponent text={titles.catalogTitle}>
				{newProducTypes.map((item) => (
					<CatalogItem catalogName={item.name} imageSrc={item.img} key={item.id} id={item.id}/>
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
