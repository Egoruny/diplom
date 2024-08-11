import { FC } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../utils/constans/path";
import styles from "./catalog-item.module.css";

type CatalogItemProps = {
	id: number;
	imageSrc: string;
	catalogName: string;
};

const imageSize = 100;
const alt = "netu";

export const CatalogItem: FC<CatalogItemProps> = ({
	imageSrc,
	catalogName,
	id,
}) => (
	<Link to={`${PATH.CatalogPage}/${id}`}>
		<div className={styles.main_container}>
			<div className={styles.container_img}>
				<img
					src={imageSrc}
					alt={alt}
					width={imageSize}
					height={imageSize}
				/>
			</div>
			<span className={styles.footer_text}>{catalogName}</span>
		</div>
	</Link>
);
