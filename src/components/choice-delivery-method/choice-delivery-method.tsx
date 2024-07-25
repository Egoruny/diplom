
import { AiOutlineRight } from "react-icons/ai";

import { Button } from "@components/button/button"


import styles from "./choice-delivery-method.module.css"

export const ChoiseDeliveryMethod = () => {


    return (
        <div className={styles.wrapp}>
           <Button type="defult" className={styles.choise_btn} text='Самовывоз' icon={<AiOutlineRight/>}/>
        </div>
    )
}