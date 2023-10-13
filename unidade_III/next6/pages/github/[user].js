import React from 'react'
import styles from '../../styles/[user].module.css'

export default function TheUsers({data}){
    
    return (
        <div className={styles.body}>
           <div className={styles.main}>
                <div className={styles.containerInfo}>
                    <div className={styles.card}>
                        <img src={data.avatar_url}/>
                    </div>
                    <div className={styles.contDetails}>
                        <p>Usuário: </p>
                        <p className={styles.dado}>{data.name}</p>
                    </div>
                    <div className={styles.contDetails}>
                        <p>ID: </p>
                        <p className={styles.dado}>{data.id}</p>
                    </div>
                </div>
           </div>
        </div>           
    )
}

export async function getStaticPaths(){

    //melquetrindade
    //DaviNatan10
    //ErickBezerrar
    //MarlonHD
    //thidoa
    //ViniciusMaiaM
    //Thami03
    //Manuelly1

    return {
        paths:[
            {params: {user: "melquetrindade"}},
            {params: {user: "DaviNatan10"}},
            {params: {user: "ErickBezerrar"}},
            {params: {user: "MarlonHD"}},
            {params: {user: "thidoa"}},
            {params: {user: "ViniciusMaiaM"}},
            {params: {user: "Thami03"}},
            {params: {user: "Manuelly1"}},
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://api.github.com/users/${params.user}`)
    const data = await res.json();

    return {
      props: {
        data
      }
    }
}