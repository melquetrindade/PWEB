import React from 'react';
import styles from '../styles/index.module.css'

export default function Home(){
    return (
        <>
            <h1>
                Página Principal
            </h1>
            <ShowImg/>
        </>
    )
}

function ShowImg(){
    return (
        <div className={styles.card}>
            <div className={styles.poster}>
                <img src='https://i.pinimg.com/564x/d2/84/d2/d284d2fb3dd25062a9d6c0076cf30855.jpg' alt='carro'/>
            </div>
            <div className={styles.details}>
                <img src='/images/logo_spider2.png' className={styles.logo}></img>
            </div>
        </div>
    )
}