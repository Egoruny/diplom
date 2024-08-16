import { FC,useState } from "react";
import { useAppDispatch } from "@hooks/typed-redux-hooks";
import { Checkbox } from "@components/checkbox/checkbox";
import { setData } from "@redux/slices/filters-slice/filter-slice";

import styles from "./filter-block.module.css";

type FilterBlockType = {
	text: string;
	checkboxData: string;
    filterId:number
};
export const FilterBlock: FC<FilterBlockType> = ({ text, checkboxData,filterId }) => {
    const [activeChecboxes,setActiveChecboxes] = useState<string[]>([])
    const dispatch = useAppDispatch()
	const checkboxDataArr = checkboxData.split(",");

    const onChangeFilter = (id:number,value:string) => {
        const newSelectedValues = activeChecboxes.includes(value)
        ? activeChecboxes.filter(v => v !== value) 
        : [...activeChecboxes, value]; 

        setActiveChecboxes(newSelectedValues)
    dispatch(setData({ id, value:newSelectedValues }));
    
    }


	return (
		<div className={styles.container}>
			<h3>{text}</h3>
			{checkboxDataArr.map(checkboxText => (
				<Checkbox text={checkboxText} key={checkboxText} onChange={() => onChangeFilter(filterId,checkboxText)} />
			))}
		</div>
	);
};
