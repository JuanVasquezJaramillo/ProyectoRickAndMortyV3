import style from '../modules/card.module.css'
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../Redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

   const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
      
      const [isFav, setFav] = useState(false);

      const handleFavorite = () =>{
         isFav ? removeFav(id) : addFav({
            id, name, status, species, gender, origin, image, onClose
         });
         setFav(!isFav);
      };

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setFav(true);
            }
         });
      }, [myFavorites]);

   return (
      <div className={style.contenedor}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={style.favoriteBoton}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.favoriteBoton}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
         <img src={image} className= {style.img} />
         </Link>
         {/* <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
          */}
          <button onClick={ ()=> {onClose(id)} } className={style.pruebaBoton}></button>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Card);
