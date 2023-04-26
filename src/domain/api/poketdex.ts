import type { Stat, Type, PokemonInfo , PokemonList} from '../types';


const BASE_PATH = "https://pokeapi.co/api/v2/pokemon"; //리액트 기본사이트 경로


export const getPocketBasicInfo = (pocketmonId : string) => {

    return fetch(`${BASE_PATH}/id=${pocketmonId}`).then(
        (response) => response.json()
    );

}