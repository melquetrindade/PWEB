import React from 'react'

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)
    const data = await res.json()
  
    return {
        props: {data}
    }

}

export default function Movies({data}){

    return (
        <div>
            {data.Search.map((m) => (
                <div>{m.Title} --- {m.Year}</div>
            ))}               
        </div>
    )
}