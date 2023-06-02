const app = require('../app');
const session = require('supertest');
const agent = session(app); //Este es nuestra promesa a la cual le vamos a hacer peticiones


describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/902020').expect(500);
        });
    });
    describe('GET /rickandmorty/login', () => {
        it('Debe devolver access como: true', async () => {
            const response = (await agent.get('/rickandmorty/login?email=RickSanchezC-137@gmail.com&password=wasd123')).body
            expect(response.access).toEqual(true);
        });
        it('Debe devolver access como: false', async () => {
            const response = (await agent.get('/rickandmorty/login?email=MortySmithC-137@gmail.com&password=dasw123')).body
            expect(response.access).toEqual(false);
        });
    });
    describe('POST /rickandmorty/fav', () => {
        const character = {
            id: 1,
            name: 'Rick'
        };
        const character2 = {
            id: 2,
            name: 'Morty'
        };
        it('Se devuelve el elemento enviado por body', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character)).body;
            expect(response).toContainEqual(character); //metodo de jest para testear objetos
        });
        it('Devuelve el elemento previo y el actual', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character);
            expect(response).toContainEqual(character2);
        });
    });
    describe('DELETE /rickandmorty/fav/:id', () => {
        const character = {
            id: 1,
            name: 'Rick'
        };
        const character2 = {
            id: 2,
            name: 'Morty'
        };
        it('Devuelve el arreglo correspondiente si no se elimina ningún personaje', async () => {
            const response = (await agent.delete('/rickandmorty/fav/8023')).body;
            expect(response).toContainEqual(character);
            expect(response).toContainEqual(character2);
        });
        it('Elimina correctamente al personaje deseado', async () =>{
            const response = (await agent.delete('/rickandmorty/fav/1')).body;
            expect(response).toContainEqual(character);
        });
    });
});

