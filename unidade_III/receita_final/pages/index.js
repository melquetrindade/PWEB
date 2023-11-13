import React from 'react';
import styles from '../styles/index.module.css'

export default function Home(){
    return (
        <main>
            <div className={styles.content}>
                <h1>
                    Receitas de Next
                </h1>
                <ul>
                    <li>
                        <a href='https://pweb-pimq.vercel.app/' target='_blank'>Receita 1</a>
                    </li>
                    <li>
                        <a href='https://pweb-reeb.vercel.app/' target='_blank'>Receita 2</a>
                    </li>
                    <li>
                        <a href='https://front-end-vikb.vercel.app/' target='_blank'>Receita 3</a>
                    </li>
                    <li>
                        <a href='https://pweb-six.vercel.app/' target='_blank'>Receita 4</a>
                    </li>
                    <li>
                        <a href='https://receitas5-6-9-3bm2.vercel.app/movies3' target='_blank'>Receita 5</a>
                    </li>
                    <li>
                        <a href='https://receita6-next.vercel.app/' target='_blank'>Receita 6</a>
                    </li>
                    <li>
                        <a href='https://receita9-six.vercel.app/' target='_blank'>Receita 9</a>
                    </li>
                </ul>
            </div>
        </main>
    )
}