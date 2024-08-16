import { useEffect } from "react";
import { AuthRedistration } from "@components/auth-registration/auth-registration";
import { PageHeader } from "@components/page-header/page-header";
import { useAppSelector } from "@hooks/typed-redux-hooks";
import { useNavigate } from "react-router-dom";
import { getIsSucces,getIsAuth } from "@redux/slices/auth-slice/auth-selectors";
import styles from "./auth-page.module.css";


export const AuthPage = () => {
const navigate = useNavigate()
const succes = useAppSelector(getIsSucces)
const isAuth = useAppSelector(getIsAuth)



useEffect(() => {
if(succes || isAuth) {
	navigate('/')
}

},[succes])



	return (
		<>
			<PageHeader title="Авторзация/Реистрация" />
			<div className={styles.main_container}>
            <AuthRedistration/>
            </div>
		</>
	);
};
