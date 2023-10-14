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
                <Link href='/movies2'>EXERCÍCIO 1</Link>
            </li>
            <li>
                <Link href='/infoCliente'>EXERCÍCIO 2</Link>
            </li>
            <li>
                <Link href='/movies'>EXERCÍCIO 3</Link>
            </li>
        </ul>
    )
}