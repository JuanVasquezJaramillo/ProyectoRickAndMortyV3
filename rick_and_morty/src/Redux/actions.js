// export const addFav = (character) =>{
//     return {
//         type: "ADD_FAV",
//         payload: character
//     }
// }; //Antigua function addFav
import axios from "axios";


export const addFav = (character)=>{

   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const {data} = await axios.post(endpoint, character) 
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
      };
   } catch (error) {
      console.log(error.message) // Console.log para etapa de development
   }

   
  };
//-------------------- addFav sin asyn y await-------------------
// export const addFav = (character)=>{
//    const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    return (dispatch) => {
//      axios.post(endpoint, character).then(({ data }) => {
//         return dispatch({
//            type: 'ADD_FAV',
//            payload: data,
//         });
//      });
//   };
// };


// export const removeFav = (id) =>{
//     return {
//         type: 'REMOVE_FAV',
//         payload: id
//     }
// }; // ANTIGUA FUNCTION removeFav


export const removeFav = (id)=>{

   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const {data} = await axios.delete(endpoint)
            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
            });
      };   
   } catch (error) {
    console.log(error.message);  
   }   
};




//--------------------------function removeFav sin async y await----------------
// export const removeFav = (id)=>{
//    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//    return (dispatch) => {
//       axios.delete(endpoint).then(({ data }) => {
//          return dispatch({
//             type: 'REMOVE_FAV',
//             payload: data,
//       });
//       });
//    };
// };

export const filterCards = (gender) =>{
    return {
        type: 'FILTER',
        payload: gender
    }
};

export const orderCards = (order)=>{
    return{
        type: 'ORDER',
        payload: order
    }
}