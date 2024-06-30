
import { ReactNode } from 'react'
import styles from './wrap-component.module.css'

type WrapComponentProps = {
    text:string
    children:ReactNode
}


export const WrapComponent = ({text,children}:WrapComponentProps) => {

    return (
        <div className={styles.main_container}>
            <h2>{text}</h2>
            <div className={styles.row_container}>
            {children}
            </div>
        </div>
    )
}
