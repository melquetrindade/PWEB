import React from 'react'

export default function ThePlayers({data}){

    //console.log(`Pré-renderizando ${data.Title}`)
    console.log(`${data}`)
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
        <div>
            testando
        </div>
    )
}

export async function getStaticPaths(){

    //#2Q2QCYLPR
    //#2PRRPYCV0
    return {
        paths:[
            {params: {tag: "%2PRRPYCV0"}},
            {params: {tag: "%2Q2QCYLPR"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://api.clashroyale.com/v1/players/${params.tag}`)
    const data = await res.json();

    return {
      props: {
        data
      }
    }
}