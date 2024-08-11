import { FC, useState } from "react";
import { UseFormRegister, FieldValues,FieldError,FieldErrorsImpl,Merge } from "react-hook-form";

import cn from "classnames";
import styles from "./input.module.css";

type InputProps = {
	type?: string;
	inputName: string;
	placeholder?: string;
	register: UseFormRegister<FieldValues>;
	required?: boolean;
	value?:string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> 
};

const search = "поиск";



export const Input: FC<InputProps> = ({
	type = "text",
	inputName = "",
	placeholder,
	register,
	required,
	error = false,
	value
}) => {
	const [focus, setFocus] = useState(false);
	const isTelOrEmail = type === "tel" || type === "email";
	const telOrEmailPlaceholder = type === "tel" ? "+375(_ _)_ _ _  _ _  _ _" : "Ivanov@mail.ru";
	const clasesInputDefult = cn(styles.input_defult, {
		[styles.input_tel_email]: isTelOrEmail,
		[styles.upPlaceholder]: focus || value,
		[styles.error]:error,
		
	});
	const clasesCastomPlaceholder = cn(styles.castom_placeholder,{[styles.error_plaseholder]:error,})


	if (type === "search") {
		return (
			<div className={styles.input_field}>
				<input className={styles.input_header} type={type} />
				<div className={styles.icon_field}>
					<i className={styles.fa}></i>
					<span>{search}</span>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.input_wrap}>
			<input
				onFocus={() => setFocus(true)}
				className={clasesInputDefult}
				type={type}
				placeholder={isTelOrEmail ? telOrEmailPlaceholder : placeholder}
				{...register(inputName, {
					onBlur: () => {
						setFocus(false);
					},
					required,
				})}
			/>
			<label className={clasesCastomPlaceholder}>{placeholder}</label>
		</div>
	);
};
