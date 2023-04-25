export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}


export type Type = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export type PokemonInfo = {
    name: string;
    sprites: { other: { 'official-artwork': { front_default: string } } };
    stats: Array<Stat>;
    types: Array<Type>;
}