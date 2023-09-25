import React from 'react';
import useSWR from 'swr';
import styles from '../styles/infoCliente.module.css'

export default function InfoCliente(){
    const {data, error} = useSWR(`https://extreme-ip-lookup.com/json/?key=bbjnSAZBbYg2kosjued6 `,fetcher02)
    if(error){
        return(
            <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
        )
    }
    if(data){
        return(
            <div>
                <h1 className='text-center py-2'>Informações da Máquina</h1>
                <div className={styles.containerInfo}>
                    <div className={styles.info}>
                        <div className={styles.ajuste}>IP de Consulta:  <p>{data.query}</p></div>
                        <div className={styles.ajuste}>País: <p>{data.country}</p></div>
                        <div className={styles.ajuste}>Cidade: <p>{data.city}</p></div>
                        <div className={styles.ajuste}>Região: <p>{data.region}</p></div>
                        <div className={styles.ajuste}>ISP: <p>{data.isp}</p></div>
                        <div className={styles.ajuste}>Latitude: <p>{data.lat}</p></div>
                        <div className={styles.ajuste}>Longitude: <p>{data.lon}</p></div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <Load/>
    )
}

async function fetcher02(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
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