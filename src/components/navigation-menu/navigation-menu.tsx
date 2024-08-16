import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Bage } from "@components/bage/bage";

import { getIsAuth } from "@redux/slices/auth-slice/auth-selectors";

import { setIsAuth } from "@redux/slices/auth-slice/auth-slice";

import { useAppSelector, useAppDispatch } from "@hooks/typed-redux-hooks";

import { PATH } from "@utils/constans/path";

import styles from "./navigation-menu.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { MdExitToApp } from "react-icons/md";

export const NavigationMenu = () => {
	const dispath = useAppDispatch();
	const isAuth = useAppSelector(getIsAuth);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const navigeteToBasketPage = () => {
		if (pathname === PATH.BasketPage) return;
		navigate(PATH.BasketPage);
	};
	const navigeteToAuthPage = () => {
		if (pathname === PATH.Auth) return;
		navigate(PATH.Auth);
	};

	const logOut = () => {
		dispath(setIsAuth(false));
	};

	return (
		<nav>
			<ul className={styles.btn_groupe}>
				<li>
					<div className={styles.bage_container}>
						<Bage type="basket" />
						<Button
							type="defult"
							icon={<SlBasket className={styles.icon} />}
							size="small"
							onClick={navigeteToBasketPage}
						/>
					</div>
				</li>

				<li>
					{isAuth ? (
						<Button
							type="defult"
							icon={<MdExitToApp className={styles.icon} />}
							size="small"
							onClick={logOut}
						/>
					) : (
						<Button
							type="defult"
							icon={<AiOutlineUser className={styles.icon} />}
							size="small"
							onClick={navigeteToAuthPage}
						/>
					)}
				</li>
			</ul>
		</nav>
	);
};
