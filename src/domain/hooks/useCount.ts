import { useQuery } from "@tanstack/react-query";

import { countAtom } from '../atom/count';
import { useRecoilState } from 'recoil';



const useCount = () => {

    const [count, setCount] = useRecoilState(countAtom);
    
    const previousButton = () => {
        setCount(count - 1);
    }

    const nextButton = () => {
        setCount(count + 1);
    }

    return {
        currentNumber : count,
        previousButton,
        nextButton
    }
}

export default useCount;