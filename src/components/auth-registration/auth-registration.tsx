import { useState } from "react";
import { AuthForm } from "./auth-form/auth-form";
import { RegistrationForm } from "./registration-form/registration-form";
import { Button } from "@components/button/button";
import styles from "./auth-registration.module.css";

export const AuthRedistration = () => {
	const [isLogin, setIsLogin] = useState(false);

	const selectForm = () => {
		setIsLogin(prev => !prev);
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.main_container}>
					{isLogin ? <AuthForm /> : <RegistrationForm />}
				</div>
				<Button
					text={
						isLogin
							? "Перейти на регистрацию"
							: "Перейти на авторизацию"
					}
					className={styles.change_btn}
					onClick={selectForm}
				/>
			</div>
		</>
	);
};
