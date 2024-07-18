import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Bage } from "@components/bage/bage";

import basketIcon from "../../assets/icon_basket.svg";
import profileIcon from "../../assets/icon_profile.svg";

import { PATH } from "@utils/constans/path";

import styles from "./navigation-menu.module.css";

// const navMenuData = [basketIcon, profileIcon];

export const NavigationMenu = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();


	const navigeteMenuClick = () => {
		if (pathname === PATH.BasketPage) return;

		navigate(PATH.BasketPage);
	};
	return (
		<nav>
			<ul className={styles.btn_groupe}>
				<li>
					<div className={styles.bage_container}>
						<Bage type="basket" />
						<Button
							type="defult"
							icon={basketIcon}
							size="small"
							onClick={navigeteMenuClick}
						/>
					</div>
				</li>

				<li>
					<Button
						type="defult"
						icon={profileIcon}
						size="small"
						onClick={navigeteMenuClick}
					/>
				</li>
			</ul>
		</nav>
	);
};
