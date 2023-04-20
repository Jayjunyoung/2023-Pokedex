import {atom} from "recoil";


export const countAtom = atom({
    key : "countState",
    default : 1
}); //기본 카운트는 1로설정