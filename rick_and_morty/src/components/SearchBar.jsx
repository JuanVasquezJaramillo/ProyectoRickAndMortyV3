import style from '../modules/searchBar.module.css';
import { useState } from 'react';
const SearchBar = ({onSearch}) =>{

   const [id,setId] = useState('');
   const handleChange = (event)=>{
      if(isNaN(event.target.value)){
         return window.alert('Ups! Solo puedes agregar personajes por medio de un número entero (Hay más de 500 personajes ;D)')
      }else{
         setId(event.target.value)
      }
      
   };

   return(
      <div className={style.contenedor}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
export default SearchBar;