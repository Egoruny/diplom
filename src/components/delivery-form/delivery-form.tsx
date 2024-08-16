import {FC} from 'react'
import { Input } from "@components/input-castom/input";
import { UseFormRegister, FieldValues,FieldErrors,UseFormWatch } from "react-hook-form";

const formItems = [
	{
		type: "text",
		placeholder: "Город",
		inputName: "city",
		required: true,
	},
	{
		type: "text",
		placeholder: "Улица",
		inputName: "strit",
		required: true,
	},
	{
		type: "text",
		placeholder: "Дом",
		inputName: "house",
		required: true,
	},
];

type DelivertFormProps = {
    register:UseFormRegister<FieldValues>;
    watch:UseFormWatch<FieldValues>
    errors:FieldErrors<FieldValues>
}

export const DelivertForm:FC<DelivertFormProps> = ({register,watch,errors}) => {

	return (
		<>
            <h3>Адрес</h3>
			{formItems.map(formItem => (
				<Input
					{...formItem}
					register={register}
					key={formItem.inputName}
					value={watch(formItem.inputName)}
					error={errors[formItem.inputName]}
				/>
			))}
		</>
	);
};
