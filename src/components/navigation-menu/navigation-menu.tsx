import { Button } from "../../components/button/button";
import basketIcon from "../../assets/icon_basket.svg";
import profileIcon from "../../assets/icon_profile.svg";
import styles from "./navigation-menu.module.css";

const imageSize = 20;

const navMenuData = [basketIcon, profileIcon];

export const NavigationMenu = () => {
	return (
		<nav>
			<ul className={styles.btn_groupe}>
				{navMenuData.map((item,index) => (
					<li key={index}>
						<Button type="defult" size="small">
							<img
								src={item}
								alt="bascet"
								width={imageSize}
								height={imageSize}
							/>
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};
