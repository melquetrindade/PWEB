import React from 'react'
import Link from 'next/link'
import styles from '../styles/navBar.module.css'

export default function NavBar(){
    return (
        <ul className={styles.ul}>
            <li>
                <Link href='/'>HOME</Link>
            </li>
            <li>
                <Link href='/movies'>FILMES 1</Link>
            </li>
            <li>
                <Link href='/movies2'>FILMES 2</Link>
            </li>
            <li>
                <Link href='/movies3'>FILMES 3</Link>
            </li>
            <li>
                <Link href='/movies4'>FILMES 4</Link>
            </li>
            <li>
                <Link href='/movies/tt0033152'>FILMES 5.1</Link>
            </li>
            <li>
                <Link href='/github/melquetrindade'>FILMES 5.2</Link>
            </li>
            <li>
                <Link href='/infoCliente'>INFO CLIENTE</Link>
            </li>
        </ul>
    )
}