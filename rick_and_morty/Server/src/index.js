// const http = require('http');
// const character = require('./utils/data.js')

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1);
//         let charactersFilter = character.find((char) => char.id === Number(id))

//         res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(charactersFilter))

//     }


// }).listen(3001,'localhost')

//------------------------WEBSERVER--------------------------------




//----------------------------------EXPRESS-----------------------------------------

const {conn} = require('./DB_connection')
const server = require('./app')
const PORT = 3001

//cuando está en true, siempre dropeará a la base de datos, esto se hace en etapa de desarrollo, una vez todo levantado correctamente, se pasaría a false para así no perder la información de la base de datos
conn.sync({force: true});
server.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))


