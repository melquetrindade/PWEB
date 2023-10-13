import React from 'react'

export default function Teste(){
    //const fetch = require('node-fetch');

    /*
    const getCards = async () => {
        //console.log('entrou')
        
        const headers = { 'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU5ZjM5NzIyLTc4MWYtNDFjMS1iYzhiLWY5MjAyNGIyOTRjZiIsImlhdCI6MTY5NzExOTI2Mywic3ViIjoiZGV2ZWxvcGVyL2M1ODY4YWIzLWNhYjItYjQ3MC0zNGE4LTY2Nzk4NDhmNjllZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuNzMuMjAyLjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.RkmynGJU0w9IsTsALr16yO2qqjdAO_hNAhywtc7vFNV3_Rm7ksZswjTGUTvUBP1-V2OJlaPtKc6krfDBYYfC8w` };
        const response = await fetch('https://api.clashroyale.com/v1/cards', {method: 'GET', headers });
        const data = await response.json();
        //console.log(data)
    }*/

    const getCards = async () => {
        console.log('entrou')
        try {
            const headers = {
                "Content-type": "application/json",
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlb Gw6Z2FtZWFwaSIsImp0aSI6ImUyOGU5MTE4LTQxMTEtNDIwMS1hOWUwLTgyNGQ5OTMxOTNkMiIsImlhdCI6MTY5NzIwNDk3MSwic3ViIjoiZGV2ZWxvcGVyL2M1ODY4YWIzLWNhYjItYjQ3MC0zNGE4LTY 2Nzk4NDhmNjllZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuNzMuM jAyLjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.BDZ5w6EaIfb5_QGisXrKqfZEpd482ovml0Kofxepnq4hGOODuVvB9pqaoQ5r4w6glYzEqcq1UxzpGI4on-q3XA'
            };
    
            const response = await fetch('https://api.clashroyale.com/v1/cards', { method: 'GET', headers });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log(data); // Ou faça algo com os dados recebidos
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    }

    return(
        <div onClick={getCards}>
            testando
        </div>
    )
}
