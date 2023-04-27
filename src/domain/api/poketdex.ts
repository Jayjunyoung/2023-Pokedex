const BASE_PATH = "https://pokeapi.co/api/v2/pokemon"; //리액트 기본사이트 경로

import { PokemonInfo } from '../types'; //타입지정을 위해 가져옴


export async function getPocketBasicInfo(pocketmonId : string)  {

    const response = await fetch(`${BASE_PATH}/${pocketmonId}`);
    const data: PokemonInfo = await response.json();

    return data;
}