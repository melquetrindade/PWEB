import useSWR from 'swr'
import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/movies4.module.css'

export function TheForm(){
    return (
        <div>
            <form>
                <div class='form-floating'>
                    <input 
                        type='text' 
                        id='titleSearchString'
                        name='titleSearchString'
                        class="form-control shadow-none" 
                        placeholder='Ex: Batman' 
                        autoComplete='true'
                    ></input>
                    <label for="titleSearchString">Filtro de Título</label>
                </div>
            </form>
        </div>
    )
}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    return (
        <div>
            {
                data.Search == undefined
                ?
                    <div>Nenhum Resultado Encontrado</div>
                :
                    <div>
                        { data?.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }
                    </div> 
            }           
        </div>
    )
}



export function TheLink({url, handler}){
    return (
        <div className={styles.containerButton}>
            <a href="#" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}

export default function Movies33(){

    const [state, setState] = useState({url:'', titleSearchString:''})

    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}

        const res = await fetch(`${state.url}/?apiKey=cc202b3f&s=${state.titleSearchString}`)
        const json = await res.json();
        return json;
    })

    const [hasForm, setHasForm] = useState(false)

    const onClickHandler = e => {
        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        if(s){
            if(hasForm == true){
                setHasForm(false)
            }
            if (state.url === '') {
                setState({url:'http://www.omdbapi.com',titleSearchString:s})
            }
            else setState({url:'',titleSearchString: state.titleSearchString})
        }
        else{
            setState({url:'',titleSearchString: state.titleSearchString})
            setHasForm(true)
        }
    }

    return (
        <div>
            <OptionSearch/>
            <TheForm/>
            <TheLink url={state.url} handler={onClickHandler} />
            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''}/>
            <FormMensage props={hasForm}/>
        </div>
    )
}

function OptionSearch(){
    return(
        <div className={styles.containerOp}>
            <p>Modos de Pesquisas:</p>
            <ul>
                <li>
                    <Link href='/'>Pesquisa após o Enter</Link>
                </li>
                <li>
                    <Link href='/movies'>Pesquisa por Busca Específica</Link>
                </li>
            </ul>
        </div>
    )
}

function FormMensage({props}){
    return(
        <div>
            {
                props ? <h1 className='text-center py-2'>Preencha o Campo de Pesquisa</h1> : null
            }
        </div>
    )
}