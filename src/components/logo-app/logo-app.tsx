import { Link } from "react-router-dom"
import { PATH } from "../../utils/constans/path"



import styles from './logo-app.module.css'

const logoName = 'Glance'


export const LogoApp = () => (
    <h1 className={styles.logo}><Link to={PATH.Root}>{logoName}</Link></h1>
)