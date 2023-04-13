import React from 'react';

import styled from "styled-components";
import Header from '../components/Header';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`;

export function MainPage() {

    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );

}


export default MainPage;