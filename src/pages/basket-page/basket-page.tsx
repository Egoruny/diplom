import { useAppSelector, useAppDispatch } from "@hooks/typed-redux-hooks";
import { useNavigate,Link } from "react-router-dom";


import { setTotalPrice } from "@redux/slices/ordering-slice/ordering-slice";
import { setCountItem,deleteItem } from "@redux/slices/cart-slice/cart-slice";

import { TotalPrice } from "@components/total-price/total-price";

import { PageHeader } from "@components/page-header/page-header";
import { BasketItem } from "@components/basket-item/basket-item";

import { getCartItems } from "@redux/slices/cart-slice/cart-selectors";
import { getIsAuth,getUser } from "@redux/slices/auth-slice/auth-selectors";

import { deleteItemByIds } from "@redux/async-actions";


import { PATH } from "@utils/constans/path";
import { titles } from "@utils/constans/titles";

import { calculateTotalPrice } from "@utils/calculate-total-price";


const BtnText = "Оформить заказ";
const title = "Корзина";
const emptyBaket = "Корзина пуста";

import styles from "./basket-page.module.css";

export const BasketPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const basketItems = useAppSelector(getCartItems);
	const isEmptyBasket = !basketItems.length;
	const isAuth = useAppSelector(getIsAuth)
	const userId = useAppSelector(getUser)

	const makeAnOrder = () => {
		dispatch(setTotalPrice(calculateTotalPrice(basketItems)));
		navigate(PATH.OrderingPage);
	};



	const onDeleteItems = (deleteItemId: number) => {
		if(isAuth) {
			dispatch(deleteItemByIds({userId,deviceId:deleteItemId}))
		} else {
			dispatch(deleteItem(deleteItemId))
		}
	};

	const setCount = (id: number, value: number) => {
		dispatch(setCountItem({ id, value }));
	};

	return (
		<div className={styles.main_container}>
			<PageHeader title={title} />
			<div className={styles.page_container}>
				<div className={styles.items_container}>
					<div className={styles.delete}></div>
					{isEmptyBasket ? (
						<h2>{emptyBaket}</h2>
					) : (
						basketItems.map(bascetItem => (
							<BasketItem
								{...bascetItem}
								key={bascetItem.id}
								setCountItem={setCount}
								deleteItem={onDeleteItems}
							/>
						))
					)}
				</div>
				<div>
				<TotalPrice
					title={titles.total}
					price={calculateTotalPrice(basketItems)}
					discount={0}
					btnText={BtnText}
					onClick={makeAnOrder}
					disabledBtn={isEmptyBasket || !isAuth}
				/>
				{!isAuth && !isEmptyBasket &&<p><Link to={PATH.Auth} >Авторизируйтесь</Link> что бы сделать заказ</p>}
				</div>
			
			</div>
		</div>
	);
};
