
import styles from './catalog-item.module.css'

type CatalogItemProps ={
    imageSrc:string
    catalogName:string
}

const imageSize = 100;
const alt = "netu"

export const CatalogItem = ({imageSrc,catalogName}:CatalogItemProps) => {

    return (
        <div className={styles.main_container}>
                <div className={styles.container_img}>
                    <img src={imageSrc} alt={alt} width={imageSize} height={imageSize}/>
                </div>
                <span className={styles.footer_text}>{catalogName}</span>
        </div>
    )
}