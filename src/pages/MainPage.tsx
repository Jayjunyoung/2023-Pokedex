import React from 'react';

import styled from 'styled-components';
import Header from '../components/Header';
import getPocketInfo from '../domain/hooks/getPocketInfo';


const Wrapper = styled.div`
    -webkit-box-pack: center;
    width: 100%;
    height: 100vh;
    z-index: -10;
    margin-bottom: 6rem;
    margin-top: 160px;
`;

const BottomSlide = styled.div`
    width: 100%;
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
`

const TopSlide = styled.div`
    width: 100%;
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
`;


//MainPage에서 사이트를 불러오는 역할을 함
export default function MainPage() {

    

    return (
        <>
            <Header />
            <Wrapper>
                <TopSlide />
                <BottomSlide />
            </Wrapper>
        </>
    );

}

