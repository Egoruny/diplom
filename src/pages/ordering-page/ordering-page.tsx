import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@hooks/typed-redux-hooks";

import { PageHeader } from "@components/page-header/page-header";
import { ChoiseDeliveryMethod } from "@components/choice-delivery-method/choice-delivery-method";
import { Input } from "@components/input-castom/input";
import { Form } from "@components/form/form";
import { Payment } from "@components/payment/payment";
import { TotalPrice } from "@components/total-price/total-price";

import { totalPriceSelect } from "@redux/slices/ordering-slice/ordering-slice-selectors";

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
	const totalPrice = useAppSelector(totalPriceSelect);
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		mode: "onSubmit",
	});
	const onSubmit = data => {
		reset();
		console.log(data);
	};


	return (
		<div className={styles.main_container}>
			<PageHeader title="Оформление заказа" />
			<ChoiseDeliveryMethod />
			<div className={styles.form_container}>
				<h3>{formContainerTitle}</h3>
				<Form
					className={styles.form}
					onFinish={handleSubmit(onSubmit)}
					id={"test"}
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
				</Form>
			</div>
			<Payment title={paymetTile} />
			<TotalPrice
				title={titles.total}
				price={totalPrice}
				discount={0}
				btnText={"Оплатить"}
				// onClick={}
				formName="test"
				btnType="submit"
			/>
		</div>
	);
};
