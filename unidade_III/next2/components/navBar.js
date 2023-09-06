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
                <Link href='/projects'>PROJETOS</Link>
            </li>
            <li>
                <Link href='contact'>CONTATO</Link>
            </li>
        </ul>
    )
}