import Cards from './components/Cards';
import NavBar from './components/Nav.jsx';
import stiloNav from './modules/nav.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/form';
import stiloPrueba from './modules/App.css'
import estilo from './modules/App.module.css'
import Favorites from './components/Favorites.jsx';

// const email = 'RickSanchezC-137@gmail.com'
// const password = 'wasd123'


// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() { 
   // const onSearch = (id) =>{
   //    setCharacters([...characters,example])
   // primer onSearh del proyecto }
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   async function onSearch(id) {
      
      // if(characters.filter((char)=> char.id === id)){
      //   return window.alert('¡Ya agregaste a este personaje!');
      // } //URL ANTIGUA: https://rickandmortyapi.com/api/character/${id}

      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         else {
            alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         
      }

      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } //código de promesa sin async y await
      //    else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // });
   }
   const onClose = (id) => {
      setCharacters(
        characters.filter((char) => {
          return char.id !== id;
        })
      );
    };
   // const login = (userData) => {
   //    if(userData.email === email && userData.password === password){
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // } //Antigua funcion Login en el front-end
   
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)      
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert('No existe usuario con este correo electronico') //Console.log meramente para etapa de development
      };
   }

   //----------------------------FUNCTION LOGIN SIN ASYN Y AWAIT-------------------
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(access);
   //       access && navigate('/home');
   //    });
   // }

   useEffect(()=>{
      !access && 
      navigate('/'); //Cuando no se ponen el array de dependencias, nos podemos enfrentar a un caso de llamados infinitos a la api y terminar siendo baneados por esta
   }, [access]); //El segundo parametro es un array de dependencia. 

   return (
         <div className={estilo.App}>   
         {/* <video src='https://videos.pond5.com/green-portal-cartoon-background-footage-131540139_main_xxl.mp4' autoPlay loop muted></video>
          */}
          {location.pathname === '/' ? <Form login = {login}/>:<NavBar onSearch={onSearch}/> 
         }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
