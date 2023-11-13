import styles from '../styles/mainContainer.module.css'

export default function MainContainer({children}){
    return (
        <>
            <div className={styles.mainContainer}><div>{children}</div></div>
        </>
    )
}