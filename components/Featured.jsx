import Image from 'next/image'
import styles from '../styles/Featured.module.css'


const Featured = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/arrowl.png" alt="" />
            <div className={styles.wrapper}></div>
            <Image src="/img/arrowr.png" alt=""/>
        </div>
    )
}

export default Featured
