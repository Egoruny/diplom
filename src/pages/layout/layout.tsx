import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

import { Header } from "../../components/header/header";

export const Layout = () => {




	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.page_wrapper}>
				<Outlet />
			</div>
		</div>
	);
};

