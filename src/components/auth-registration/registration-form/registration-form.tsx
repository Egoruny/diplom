import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Button } from "@components/button/button";

import { useAppDispatch, useAppSelector } from "@hooks/typed-redux-hooks";

import { getCartItems } from "@redux/slices/cart-slice/cart-selectors";

import { Input } from "@components/input-castom/input";
import { Form } from "@components/form/form";

import { registration } from "@redux/async-actions";

import styles from "./registration-form.module.css";

const formItems = [
	{
		type: "email",
		placeholder: "Email",
		inputName: "email",
		required: true,
	},
	{
		type: "password",
		placeholder: "Пароль *",
		inputName: "password",
		required: true,
	},
	{
		type: "password",
		placeholder: " Повторите пароль *",
		inputName: "repeatPass",
		required: true,
	},
];

export const RegistrationForm = () => {
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(getCartItems);

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		mode: "onSubmit",
	});
	const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
		console.log(email, password);
		dispatch(registration({ email, password, cartItems }));
		reset();
	};
	return (
		<Form className={styles.form} onFinish={handleSubmit(onSubmit)}>
			{formItems.map(formItem => (
				<Input
					{...formItem}
					register={register}
					key={formItem.inputName}
					value={watch(formItem.inputName)}
					error={errors[formItem.inputName]}
				/>
			))}

			<Button text="Войти" htmlType="submit" />
		</Form>
	);
};
