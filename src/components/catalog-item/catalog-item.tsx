
import styles from './catalog-item.module.css'

type CatalogItemProps ={
    imageSrc:string
    catalogName:string
}

export const CatalogItem = ({imageSrc,catalogName}:CatalogItemProps) => {

    return (
        <div className={styles.main_container}>
                <div className={styles.container_img}>
                    <img src={imageSrc} alt="netu" width={100} height={100}/>
                </div>
                <span className={styles.footer_text}>{catalogName}</span>
        </div>
    )
}