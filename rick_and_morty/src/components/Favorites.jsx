import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import estilo from '../modules/favorites.module.css'
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites})=>{

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    
    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }



    return(
        <div className={estilo.contenedor}>

            <div className={estilo.pruebaFilter}>
            <select onChange={handleOrder}>
                <option value=''>Ordenar</option>
                <option value='A'>Ascendente</option>
                <option value='D'>descendente</option>
            </select>
            
            <select onChange={handleFilter}>
                <option value=''>Seleccionar filtro</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknow'>unknow</option>
            </select>
            </div>
            {
                myFavorites?.map((favorite)=>{
                    return(
                        <Card   
                        key = {favorite.id}
                        id = {favorite.id}
                        name = {favorite.name}
                        status={favorite.status}
                        species={favorite.species}
                        gender={favorite.gender}
                        origin={favorite.origin}
                        image={favorite.image}
                        onClose={favorite.onClose}
                        />
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps,null)(Favorites);
