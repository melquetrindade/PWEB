import React, { useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/movies3.module.css'
import { Button, Card } from 'antd';

async function theFetcher(url) {

    if (url === null || url === '') {
        return {Search:''}
    }

    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({data, show, func}){

    //console.log(`data.error: ${data.error}`)
    //console.log(`data.Search: ${data.Search}`)

    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<Load/>)

    const styleCard = {
        marginTop: 10,
        width: 300,
        height: 110,
        cursor: 'pointer'
    }

    return (
        <div>
            <h1 className='text-center py-2'>Resultados da API</h1>
            <div className={styles.containerCard}>
                { data?.Search.map( (m) => 
                    <Card 
                        title={m.Title}
                        bordered={true}
                        style={styleCard}
                        onClick={func}
                    >
                        <p>Ano: {m.Year}</p>
                    </Card>
                )}  
            </div>
        </div>
    )
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

export function TheLink({url, handler}){    

    return (
        <div>
            <Button type='primary' onClick={handler}>{url === '' ? 'Mostrar' : 'Ocultar'}</Button>
        </div>
    )
}

export default function Movies3(){

    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('http://www.omdbapi.com/?apikey=cc202b3f&&s=bagdad')
        else setUrl('')
    }

    //console.log(`data: ${data}`)
    //console.log(`error: ${error}`)

    const buttonTest = () => {
        console.log(`funcionou`)
    }

    return (
        <div className={styles.containerMain}>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''} func={buttonTest}/>
        </div>
    )
}