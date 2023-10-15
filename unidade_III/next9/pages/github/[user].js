import React from 'react'
import styles from '../../styles/[user].module.css'

export default function TheUsers({data}){
    
    if(data == undefined || data.name == undefined){
        if(data == undefined){
            return(<Load/>)
        }
        return(
            <h1 className='text-center py-5'>O ID digitado é inválido!</h1>
        )
    }

    if(data.name != undefined){
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
    
}

function Load(){
    return(
        <div className={styles.fade}>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
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

    //uFelippeSilva
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