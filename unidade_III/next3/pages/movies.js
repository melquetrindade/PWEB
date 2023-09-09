import React from 'react'
import styles from '../styles/movie.module.css'

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)
    const data = await res.json()
  
    return {
        props: {data}
    }

}

export default function Movies({data}){

    return (
        <>
            <h1 className='display-1 text-center py-5'>Next</h1>
            <form action='#' className={styles.form}>
                <input type='text' id='movieId' placeholder='Nome do Filme' required></input>
                <label for="movieId">Digite o Filme</label>
                <input type="text" id="anoId" required placeholder="Ano de Lançamento" minlength="1" maxlength="8"></input>
                <label for="anoId">Digite o Ano</label>
            </form>
            <div>
                {data.Search.map((m) => (
                    <div>{m.Title} --- {m.Year}</div>
                ))}               
            </div>
        </>
    )
}