import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import estilo from '../modules/detail.module.css'


const Detail = ()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        //URL ANTIGUA: https://rickandmortyapi.com/api/character/${id}
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div className={estilo.contenedor}>
            <img src={character.image && character.image} alt='' className={estilo.pruebaImg}/>
            {/* <div className={estilo.subContenedor}> */}
            <h1>Name: {character.name && character.name}</h1>
            <h1>Status: {character.status && character.status}</h1>
            <h1>Species: {character.species && character.species}</h1>
            <h1>Gender: {character.gender && character.gender}</h1>
            <h1>Origin: {character.origin?.name && character.origin?.name}</h1>
            <Link to='/home'>
                <button className={estilo.boton}></button>
            </Link>
            {/* </div> */}
        </div>
    )
}
export default Detail;