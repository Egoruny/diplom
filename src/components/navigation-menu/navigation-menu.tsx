import { Button } from "../../components/button/button";
import basketIcon from "../../assets/icon_basket.svg";
import profileIcon from "../../assets/icon_profile.svg";
import styles from "./navigation-menu.module.css";

const imageSize = 20;

export const NavigationMenu = () => {
	return (
		<nav>
			<ul className={styles.btn_groupe}>
				<li>
					<Button type="defult" size="small">
						<img
							src={basketIcon}
							alt="bascet"
							width={imageSize}
							height={imageSize}
						/>
					</Button>
				</li>
				<li>
					<Button type="defult" size="small">
						<img
							src={profileIcon}
							alt="profile"
							width={imageSize}
							height={imageSize}
						/>
					</Button>
				</li>
			</ul>
		</nav>
	);
};
