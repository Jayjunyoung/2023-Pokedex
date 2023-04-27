import { useQuery } from '@tanstack/react-query';
import { getPocketBasicInfo } from '../api/poketdex';
import { Type, Stat, PokemonInfo } from '../types';



const getPocketInfo = (id: string) => {

    const {data, isLoading} = useQuery(['pocketmon',id],  () => getPocketBasicInfo(id));

    return data;
}

export default getPocketInfo;