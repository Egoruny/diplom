import { LogoApp } from "../logo-app/logo-app";
import { Input } from "../input-castom/input";
import { NavigationMenu } from "../../components/navigation-menu/navigation-menu";

import styles from "./header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<LogoApp />
			<Input type="search" />
			<NavigationMenu />
		</header>
	);
};
