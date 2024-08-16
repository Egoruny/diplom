import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector,useAppDispatch } from "@hooks/typed-redux-hooks";
import { PageHeader } from "@components/page-header/page-header";
import { ChoiseDeliveryMethod } from "@components/choice-delivery-method/choice-delivery-method";
import { Input } from "@components/input-castom/input";
import { Form } from "@components/form/form";
import { Payment } from "@components/payment/payment";
import { TotalPrice } from "@components/total-price/total-price";
import { DelivertForm } from "@components/delivery-form/delivery-form";

import { getCartItems } from "@redux/slices/cart-slice/cart-selectors";
import { getUser } from "@redux/slices/auth-slice/auth-selectors";

import { calculateTotalPrice } from "@utils/calculate-total-price";

import { makeOrder } from "@redux/async-actions";

import { titles } from "@utils/constans/titles";

import styles from "./ordering-page.module.css";


const formItems = [
	{
		type: "text",
		placeholder: "Имя *",
		inputName: "name",
		required: true,
	},
	{
		type: "tel",
		placeholder: "Телефон *",
		inputName: "tel",
		required: true,
	},
	{
		type: "email",
		placeholder: "Email",
		inputName: "email",
		required: false,
	},
];

const paymetTile = "Оплата";

const formContainerTitle = "Контактные данные";

export const OrderingPage = () => {
	const [isOrder,setIsOreder] = useState(false)
	const dispatch = useAppDispatch()
	const basketItems = useAppSelector(getCartItems);
	const userId = useAppSelector(getUser);
	const {
		handleSubmit,
		register,
		formState: { errors, isDirty, isValid  },
		reset,
		watch,
	} = useForm({
		mode: "onSubmit",
	});
	const onSubmit = data => {

		dispatch(makeOrder({userData:{...data,userId},items:basketItems}))
		reset();
	};


	const changeOrder = () => {
		setIsOreder(prev => !prev)
	}

	return (
		<div className={styles.main_container}>
			<PageHeader title="Оформление заказа" />
			<ChoiseDeliveryMethod onClick={changeOrder} isOrder={isOrder} />
			<div className={styles.form_container}>
				<h3>{formContainerTitle}</h3>
				<Form
					className={styles.form}
					onFinish={handleSubmit(onSubmit)}
					id={"order"}
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
					{isOrder && <DelivertForm register={register} watch={watch} errors={errors} />}
				</Form>
			</div>
			<Payment title={paymetTile} />
			<TotalPrice
				title={titles.total}
				price={calculateTotalPrice(basketItems)}
				discount={0}
				btnText={"Оплатить"}
				disabledBtn={!isDirty || !isValid}
				formName="order"
				btnType="submit"
			/>
		</div>
	);
};
