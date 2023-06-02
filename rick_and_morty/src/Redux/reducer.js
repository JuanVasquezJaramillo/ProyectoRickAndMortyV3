const initialState = {
    myFavorites: [],
    allCharactersFav: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            // return {
            //     ...state,
            //     myFavorites: [...state.allCharactersFav, action.payload],    //Se guarda la información que ya existia y además se le agrega la nueva que entra.
            //     allCharactersFav: [...state.allCharactersFav, action.payload]   
            // } //ANTIGUO CASE
            return {
                ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload,
              };
        case 'REMOVE_FAV':
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(fav => fav.id !== Number(action.payload)) //Se parsea con la propiedad 'Number' que es nativa de .JS
            // }
            return {
                ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload
              };
        case 'FILTER':
            const allCharactersFiltered = state.allCharactersFav.filter(
                (char) => char.gender === action.payload
            )
            return{
                ...state,
                myFavorites: allCharactersFiltered
            }
        case 'ORDER':
            const allCharactersFavcopy = [...state.allCharactersFav];
            return{
                ...state,
                myFavorites: 
                action.payload === 'A' 
                ? allCharactersFavcopy.sort((a,b) => a.id - b.id)  //El '-' es el equivalente a '<'
                : allCharactersFavcopy.sort((a,b) => b.id - a.id)
            }

        default:
            return { ...state }; //Siempre hay que retornar 'copias' del estado
    }
};

export default reducer;