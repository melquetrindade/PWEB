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
                <Link href='/movies/tt0033152'>RECEITA 9.1</Link>
            </li>
            <li>
                <Link href='/github/melquetrindade'>RECEITA 9.2</Link>
            </li>
        </ul>
    )
}