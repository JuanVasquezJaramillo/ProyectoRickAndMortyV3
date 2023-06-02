const axios = require('axios');

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((result) => result.data)
//     .then((name, gender, origin, image, status, species)=>{
//         let character = {
//             id,
//             name,
//             gender,
//             origin,
//             image,
//             status,
//             species 
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(character))
//     })
//     .catch((error) => res.writeHead(500, {'Content-type': 'text/plain'}).end(error.message))
// }
const URL = "https://rickandmortyapi.com/api/character";

// const getCharById = (req, res)=>{

//     const {id} = req.params;

//     axios.get(`${URL}/${id}`)
//     .then((result) => result.data)
//     .then(({name, gender, origin, image, status, species})=>{
//             if(name){
//                 let character = {
//                     id,
//                     name,
//                     gender,
//                     origin,
//                     image,
//                     status,
//                     species
//                 }
//             return res.status(200).json(character)
//             }
//             return res.status(404).send('Not found')
//         })
//             .catch((error) => res.status(500).send(error.message))
// };

const getCharById = async (req, res)=>{
    try {
        const {id} = req.params;

        const {data}  = await axios.get(`${URL}/${id}`); //destructuramos todas las propiedades de nuestra promesa en su propiedad data.
        let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            image: data.image,
            status: data.status,
            species: data.species
        }
        return character.name ? res.json(character) : res.status(400).send('Not Found') 
        // return res.status(200).json(character)
    } catch (error) {
        res.status(500).send(error.message)
    }   
        
};


module.exports = {
    getCharById,
};