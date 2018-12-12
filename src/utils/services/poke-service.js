import { POKE_API_URL } from '../constants/poke-api.constants';
import { reducePokeInfo } from '../functons/reduce-pokeObjects';
import axios from 'axios';

let instance = null;

class PokeService {
  
  constructor() {
    if(!instance){
      instance = this;
    }
    this.url = POKE_API_URL;
    return instance;
  }

  getPokemons() {
    return axios.get(`${this.url}/pokemon/`);
  }

  getPokemonById(id) {
    const promise = new Promise(( resolve, reject ) => {
      axios.get(`${this.url}/pokemon/${id}/`)
      .then((response) => {
        axios.get(`${this.url}/pokemon-species/${id}/`)
        .then((pokemonSpecies) => {
           resolve(reducePokeInfo({...response.data, ...pokemonSpecies.data}));
        });
      })
      .catch((error) => reject(error)); 
    });
    return promise;
  }

}

export default new PokeService();