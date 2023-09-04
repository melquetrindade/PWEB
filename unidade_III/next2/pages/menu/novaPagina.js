import React from 'react'
import styles from '../../estilos/menus.module.css'

export default function Principal(){
    return (
        <div id="container_main" className={styles.container_main}>
            <div>
                <Home/>
                <Projetos/>
                <Contato/>
            </div>
        </div>
    )
}

export function Home(){
    return (
        <h2>HOME</h2>
    )
}

export function Projetos(){
    return (
        <h2>PROJETOS</h2>
    )
}

export function Contato(){
    return (
        <h2>CONTATO</h2>
    )
}