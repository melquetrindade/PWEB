import React, { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function Movies2() {

    const router = useRouter();
    const { nameMovie, yearMovie, typeSearch } = router.query;

    if(typeSearch == 'byMovie'){
        const { data, error } = useSWR(
            `https://www.omdbapi.com/?apikey=cc202b3f&t=${nameMovie}&y=${yearMovie}`,
            fetcher
        );

        const array = []
        array.push(data)
    
        if (error) return <div>falha na requisição...</div>;
        if (!data) return <div>carregando...</div>;
    
        return (
            <div>
                {array?.map((m) => (
                    <MovieLink key={m.imdbID} movie={m} />
                ))}
            </div>
        );
    }
    else{
        const { data, error } = useSWR(
            `https://www.omdbapi.com/?apikey=cc202b3f&s=${nameMovie}`,
            fetcher
        );
    
        if (error) return <div>falha na requisição...</div>;
        if (!data) return <div>carregando...</div>;
    
        return (
            <div>
                {data.Search.map((m) => (
                    <MovieLink key={m.imdbID} movie={m} />
                ))}
            </div>
        );
    }
}



async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

function MovieLink({ movie }) {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: '/details',
            query: { id: movie.imdbID }
        });
    };

    return (
        <div>
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                {movie.Title} --- {movie.Year}
            </div>
        </div>
    );
}