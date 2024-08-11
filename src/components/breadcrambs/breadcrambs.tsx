import { useMatches, UIMatch } from "react-router-dom";

import styles from "./breadcrambs.module.css";

type CrumbFunction = (data: undefined) => React.ReactNode;


type TestMatch = UIMatch<undefined, { crumb: CrumbFunction }>;



export const Breadcrambs = () => {
	const matches = useMatches() as TestMatch[]

	const crumbs = matches
		.filter(match => Boolean(match.handle?.crumb))
		.map(match => match.handle.crumb(match.data));
	return (
		<ol className={styles.breadcrambs}>
			{crumbs.map((crumb, index) => (
				<li key={index}>{crumb}</li>
			))}
		</ol>
	);
};
