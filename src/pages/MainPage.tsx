import React from 'react';

import styled from "styled-components";
import Header from '../components/Header';

const Wrapper = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: -10;
`;

//MainPage에서 사이트를 불러오는 역할을 함
export default function MainPage() {

    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );

}

