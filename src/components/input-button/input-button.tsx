import styles from './input-button.module.css'

export const InputButton= ({onClick,value}) => {

    return (
        <div>
            <input type="radio" name="color" className={styles.radio} value={value}  onClick={(e) => onClick(e)}/>
        </div>
    )
}