import { Button } from "../../components/button/button";
import basketIcon from "../../assets/icon_basket.svg";
import profileIcon from "../../assets/icon_profile.svg";
import styles from "./navigation-menu.module.css";



const navMenuData = [basketIcon, profileIcon];

export const NavigationMenu = () => {
	return (
		<nav>
			<ul className={styles.btn_groupe}>
				{navMenuData.map((item, index) => (
					<li key={index}>
						<Button type="defult" icon={item} size="small" />
					</li>
				))}
			</ul>
		</nav>
	);
};
