import { LogoApp } from "../logo-app/logo-app";
import { InputCastom } from "../input-castom/input-castom";
import { NavigationMenu } from "../../components/navigation-menu/navigation-menu";


import styles from "./header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<LogoApp />
            <InputCastom/>
			<NavigationMenu/>
		</header>
	);
};
