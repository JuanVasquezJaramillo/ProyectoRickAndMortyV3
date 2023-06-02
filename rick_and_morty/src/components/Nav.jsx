import SearchBar from './SearchBar'
import style from '../modules/nav.module.css'
import { Link, NavLink } from 'react-router-dom';


const NavBar = ({onSearch}) =>{
    return(
        <div className={style.contenedor}>
           <div>
           <SearchBar onSearch={onSearch}/>
            </div> 
        <Link to='/home'>
            <button>
                Home
            </button>
        </Link>
        <NavLink to='/about'>
            <button>
                About
            </button>
        </NavLink>
        <NavLink to = '/favorites'>
            <button>
                Favorites
            </button>
        </NavLink>
        </div>
    );
}
export default NavBar;