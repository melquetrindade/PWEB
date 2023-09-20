import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '../styles/movieDetails.module.css'

export default function MovieDetails(){

    const router = useRouter();
    const { id } = router.query;

    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=cc202b3f&i=${id}`, fetcher)

    if(error) return <h1 className='text-center py-2'>Nenhum Resultados Encontrado</h1>
    if(!data) return <Load/>

    return(
        <div>{data.Title}</div>
    )
}

async function fetcher(url){
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