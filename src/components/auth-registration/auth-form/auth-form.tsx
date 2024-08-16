import { useForm, SubmitHandler,FieldValues } from "react-hook-form";
import { Button } from "@components/button/button";



import { login } from "@redux/async-actions";

import { Input } from "@components/input-castom/input";
import { Form } from "@components/form/form";

import styles from "./auth-form.module.css"
import { useAppDispatch } from "@hooks/typed-redux-hooks";

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
];

export const AuthForm = () => {
	const dispatch = useAppDispatch()


    const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		mode: "onSubmit",
	});
	const onSubmit:SubmitHandler<FieldValues> = ({email,password}) => {
		dispatch(login({email,password}))
		 reset();
	};
return (
    <Form
				className={styles.form}
					onFinish={handleSubmit(onSubmit)}
				>
					{formItems.map(formItem => (
						<Input
							{...formItem}
							register={register}
							key={formItem.inputName}
							value={watch(formItem.inputName)}
							error={errors[formItem.inputName]}
						/>
					))}

                    <Button text='Войти' htmlType="submit"/>
				</Form>
)
}