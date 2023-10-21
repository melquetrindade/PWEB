import React from 'react'
import styles from '../../styles/movieDetails.module.css'

function Load(){
    return(
        <div className={styles.fade}>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default function TheMovie({data}){

    if(data == undefined || data.Title == undefined){
        if(data == undefined){
            return(<Load/>)
        }
        return(
            <h1 className='text-center py-5'>O ID digitado é inválido!</h1>
        )
    }

    if(data.Title != undefined){
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
    
}

export async function getStaticPaths(){

    //tt2975590
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