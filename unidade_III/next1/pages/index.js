import React from 'react';
import {Tabela} from './tabela.js';
import styles from '../estilos/style.module.css'

// Comandos úteis:
// Carregar a aplicação: npm run dev
// Finalizar a aplicação: Ctrl + c

export default function Home(){
    return (
        <div className={styles.container_main}>
            <div className={styles.container}>
                <h2>
                    Viva Santana!
                </h2>
                <Tabela/>
            </div>
        </div>
    )
}