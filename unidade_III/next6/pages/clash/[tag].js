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

    const headers = {
        "Accept": "application/json",
        "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU5ZjM5NzIyLTc4MWYtNDFjMS1iYzhiLWY5MjAyNGIyOTRjZiIsImlhdCI6MTY5NzExOTI2Mywic3ViIjoiZGV2ZWxvcGVyL2M1ODY4YWIzLWNhYjItYjQ3MC0zNGE4LTY2Nzk4NDhmNjllZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuNzMuMjAyLjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.RkmynGJU0w9IsTsALr16yO2qqjdAO_hNAhywtc7vFNV3_Rm7ksZswjTGUTvUBP1-V2OJlaPtKc6krfDBYYfC8w'
    }

    const res = await fetch(`https://api.clashroyale.com/v1/players/${params.tag}`, {headers})
    const data = await res.json();

    return {
      props: {
        data
      }
    }
}