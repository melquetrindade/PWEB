import React, {useRef, useState} from 'react'
import styles from '../styles/movie.module.css'

/*
export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)
    const data = await res.json()
  
    return {
        props: {data}
    }

}
*/

export default function Movies({data}){

    const [divFilme, setIsVisible1] = useState(false);

    const toggDivFilme = () => {
        if(divChave){
            setIsVisible2(!divChave);
        }
        setIsVisible1(!divFilme);
    }

    const [divChave, setIsVisible2] = useState(false);

    const toggleDivChave = () => {
        if(divFilme){
            setIsVisible1(!divFilme);
        }
        setIsVisible2(!divChave);
    }

    const [movieId, setMovie] = useState('')

    const handleChange = (e) => {
        const inputText = e.target.value
    
        // Use uma expressão regular para validar se o texto contém apenas letras.
        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === '') {
          setMovie(inputText)
        }
    }

    const [anoId, setAno] = useState('')

    const handleChangeYear = (e) => {
        const inputText = e.target.value

        if (/^[0-9]+$/.test(inputText) || inputText === '') {
            setAno(inputText)
        }
    }

    const [chaveId, setChave] = useState('')

    const handleChangeChave = (e) => {
        const inputText = e.target.value

        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === '') {
            setChave(inputText)
        }
    }

    const [moviesData, setMovies] = useState(data)

    const loadMovies = async ({nameMovie, yearMovie, typeSearch}) => {
        console.log('entrou no load')
        console.log(`tipo: ${typeSearch}`)
        
        if(typeSearch == 'byMovie'){
            const res = await fetch(`https://www.omdbapi.com/?apikey=cc202b3f&t=${nameMovie}&y=${yearMovie}`)
            const resJson = await res.json()
            setMovies(resJson)
        }
        else{
            console.log(`aqui: ${nameMovie}`)
            const res = await fetch(`https://www.omdbapi.com/?apikey=cc202b3f&s=${nameMovie}`)
            const resJson = await res.json()
            console.log(resJson)
            setMovies(resJson)
        }
    }

    const searchMovie = () => {
        console.log('entrou no Movie')
        //console.log(`title antes: ${movieId}`)
        const titleFormat = movieId.replace(/ /g, '+')
        console.log(`title depois: ${titleFormat}`)
        loadMovies(titleFormat, anoId, 'byMovie')
    }

    const searchChave = () => {
        console.log('entrou no Chave')
        //console.log(`title antes: ${movieId}`)
        const titleFormat = chaveId.replace(/ /g, '+')
        console.log(`title depois: ${titleFormat}`)
        loadMovies(titleFormat, 0, 'byChave')
    }

    return (
        <>
            <div>
                <h3 className='text-center py-2'>Filtros de Pesquisa</h3>
                <div className={styles.filtro}>
                    <button onClick={toggDivFilme}>Por Filme Específico</button>
                    <button onClick={toggleDivChave}>Por Chave de Título</button>
                </div>
            </div>
            <div className={styles.porFilme} style={{ display: divFilme ? 'block' : 'none' }}>
                <h3 className='text-center py-2'>Pesquise por um Filme</h3>
                <form action='#' className={styles.form}>
                    <div class='form-floating'>
                        <input 
                            type='text' 
                            id='movieId' 
                            class="form-control shadow-none" 
                            placeholder='Nome do Filme' 
                            required
                            value={movieId}
                            onChange={handleChange}
                            >
                        </input>
                        <label for="movieId">Digite o Filme</label>
                    </div>
                    <div class='form-floating'>
                        <input 
                            type="text" 
                            id="anoId" 
                            class="form-control shadow-none" 
                            required 
                            placeholder="Ano de Lançamento" 
                            minlength="1" 
                            maxlength="6"
                            value={anoId}
                            onChange={handleChangeYear}
                        >
                        </input>
                        <label for="anoId">Digite o Ano</label>
                    </div>
                </form>
                <button onClick={searchMovie} className={styles.buttonSearch}>Buscar</button>
            </div>
            <div className={styles.porChave} style={{ display: divChave ? 'block' : 'none' }}>
                <h3 className='text-center py-2'>Pesquise por uma Chave</h3>
                <form action='#' className={styles.form}>
                    <div class='form-floating'>
                        <input 
                        type='text' 
                        id='chaveId' 
                        class="form-control shadow-none" 
                        placeholder='Ex: Bagdad' 
                        required
                        value={chaveId}
                        onChange={handleChangeChave}
                        ></input>
                        <label for="chaveId">Digite uma Chave</label>
                    </div>
                </form>
                <button onClick={searchChave} className={styles.buttonSearch}>Buscar</button>
            </div>
            <div>
                {moviesData?.Search.map((m) => (
                    <div key={m.imdbID}>{m.Title} --- {m.Year}</div>
                ))}               
            </div>
        </>
    )
}