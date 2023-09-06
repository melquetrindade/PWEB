import React from 'react';
import styles from '../styles/index.module.css'

export default function Home(){
    return (
        <>
            <h1>
                Página Principal
            </h1>
            <ShowImg/>
        </>
    )
}

function ShowImg(){
    return (
        <figure className={styles.card}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecqNONs6tIKslt1wfjFCGiR2k3n0i3DqpiPnktHlns58fxzdgVxykfRWzq0hM8ivtp0o&usqp=CAU' alt='carro'/>
            <figcaption>
                <p>Óculos</p>
            </figcaption>
        </figure>
    )
}