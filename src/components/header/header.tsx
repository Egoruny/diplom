import { LogoApp } from "../logo-app/logo-app";
import { searchAction  } from "@redux/async-actions";
import { useAppSelector,useAppDispatch } from "@hooks/typed-redux-hooks";
import { optionsSelect } from "@redux/slices/product-slice/product-slice-selectors";
import { Input } from "../input-castom/input";
import { NavigationMenu } from "../../components/navigation-menu/navigation-menu";
import debounce from "lodash.debounce";
import styles from "./header.module.css";


export const Header = () => {
 const options = useAppSelector(optionsSelect)
 const dispatch = useAppDispatch()

 const search = (e: React.ChangeEvent<HTMLInputElement>) => {
	const text = e.target.value
		dispatch(searchAction (text))
	}

	const debouncedOnChange = debounce(search, 500)

	return (
		<header className={styles.header}>
			<LogoApp />
			<Input type="search" options={options} onSearch={debouncedOnChange}/>
			<NavigationMenu />
		</header>
	);
};
