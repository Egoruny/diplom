import { PriceAria } from '../../components/price-aria/price-aria'
import { Button } from '../../components/button/button'
import { titles } from '../../utils/constans/titles'

import styles from './product-card.module.css'


const available = 'в наличии'

const notAvailable = "нет в наличии"

type ProductCardProps = {
    phoneDiscription:string
    price:number
    discount?:number
    isAvalible:boolean
    imageSrc:string
}

export const ProductCard = ({phoneDiscription,price,discount,isAvalible,imageSrc}:ProductCardProps) => {


return (
    <div className={styles.card_container}>
            <figure>
                <img src={imageSrc} width={200} height={200} />
            </figure>
            <h4 >
                {phoneDiscription}
            </h4>
            <PriceAria price={price} discount={discount}/>
            <p className={styles[`${isAvalible ?'is_avalible':'is_not_avalible'}`]}>{isAvalible ? available:notAvailable}</p>
            <Button>{titles.inBasketTitle}</Button>
            {/* <div className={styles.}></div> */}
    </div>
)
}