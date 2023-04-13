import React from 'react';

import styled from "styled-components";
import Header from '../components/Header';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(59 130 246 / 0.5);
    z-index: -10;
`;

export function MainPage() {

    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );

}


export default MainPage;