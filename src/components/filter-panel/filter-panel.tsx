import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/typed-redux-hooks";

import { filtersSelect } from "@redux/slices/product-slice/product-slice-selectors";
import { getFilters } from "@redux/async-actions";

import { FilterBlock } from "./filter-block/filter-block";

import styles from "./filter-panel.module.css";

export const FilterPanel = () => {
	const dispatch = useAppDispatch();
	const filterData = useAppSelector(filtersSelect);

	const { catalogId } = useParams();

	useEffect(() => {
        if(catalogId)
		dispatch(getFilters(catalogId));
	}, []);

	return (
		<div className={styles.container}>
			{filterData?.map(({ name, value, id }) => {
				return (
					<FilterBlock
						text={name}
						checkboxData={value}
						key={id}
						filterId={id}
					/>
				);
			})}
		</div>
	);
};
