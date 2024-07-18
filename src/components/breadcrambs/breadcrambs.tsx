import { useMatches } from "react-router-dom";

import styles from "./breadcrambs.module.css";

export const Breadcrambs = () => {
	const matches = useMatches();
	const crumbs = matches
		.filter(match => Boolean(match.handle?.crumb))
		.map(match => match.handle.crumb(match.data));
	return (
		<ol className={styles.breadcrambs}>
			{crumbs.map(
				(crumb, index) => (
					(<li key={index}>{crumb}</li>)
				)
			)}
		</ol>
	);
};
