import React from 'react'
import styles from '../../styles/movieDetails.module.css'

export default function TheMovie({data}){

    //console.log(`Pré-renderizando ${data.Title}`)
    /*
    return (
        <div>
            <div>{data.Title} --- {data.Year}</div>
            <div>{data.Plot}</div>
            <div>
                <img src={data.Poster} width="300" height="400"/>
            </div>
        </div>           
    )*/
    return(
        <div className={styles.containerCard}>
            <div className={styles.card}>
                <div className={styles.containerPoster}>
                    <img src={data.Poster}></img>
                </div>
                <div className={styles.containerDetails}>
                    <div className={styles.cont01}>
                        <div className={styles.contTitle}><h1>{data.Title}</h1></div>
                        <div className={styles.cont02}>
                            <p>{data.Year}</p>
                            <p>{data.Runtime}</p>
                            <p>{data.Type}</p>
                        </div>
                    </div>
                    <div className={styles.cont03}>
                        <div className={styles.cont04}>
                            <p style={{color: 'darkgrey'}}>Elenco:</p>
                            <p style={{marginTop: '-10px'}}>{data.Actors}</p>
                        </div>
                        <div className={styles.cont04}>
                            <p style={{color: 'darkgrey'}}>Gêneros:</p>
                            <p style={{marginTop: '-10px'}}>{data.Genre}</p>
                        </div>
                    </div>
                    <div className={styles.sinopse}>
                        <p>{data.Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths(){

    //tt0095801
    return {
        paths:[
            {params: {id: "tt0033152"}},
            {params: {id: "tt0095801"}},
            {params: {id: "tt0015400"}},
            {params: {id: "tt0041149"}},
            {params: {id: "tt0044388"}},
            {params: {id: "tt0098746"}},
            {params: {id: "tt0046322"}},
            {params: {id: "tt0046497"}},
            {params: {id: "tt0044389"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://www.omdbapi.com/?apikey=cc202b3f&i=${params.id}`)
    const data = await res.json();

    return {
      props: {
        data
      }
    }
}