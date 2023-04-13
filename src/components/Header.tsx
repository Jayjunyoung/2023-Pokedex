import styled from "styled-components";

import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from 'react';



const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    font-size: 14px;
    padding: 20px 60px;
    color: white;
    z-index: 1;
`;


const Logo = styled(motion.svg)`
    margin-right: 50px;
    width: 95px;
    height: 100px;
    margin-left: 50px;
    fill: yellow;
    path {
        stroke-width: 6px;
        stroke: blue;
    }
`;


const navVariants = {
    top: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    scroll: {
        backgroundColor: "rgba(0, 0, 0, 1)",
    },
};

const logoVariants = {
    normal: {
        fillOpacity: 1,
    },
    active: {
        fillOpacity: [0, 1, 0],
        transition: {
        repeat: Infinity,
        },
    },
};


export default function Header() {

    const navAnimation = useAnimation();
    const { scrollY } = useViewportScroll();

    useEffect(() => {
        scrollY.onChange(() => {
            if (scrollY.get() > 80) {
                navAnimation.start("scroll");
            } else {
                navAnimation.start("top");
            }
        });
    }, [scrollY, navAnimation]);

    return (
        <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
            <Logo 
            variants={logoVariants}
            whileHover="active"
            initial="normal"
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="500"
            viewBox="0 0 269.5 98.8"
            >
                <motion.path d = "M46.4 96.3L45 93.1l-18.4-41-.4-.8-.8.4-.6.3-3.3 1.6c-.5-.8-1.3-2.2-1.8-3.1L12.3 38l-1.9-3.3 3.2-2c3-1.9 6.4-3.7 10.2-5.3 7.4-3.1 14.9-4.8 21.8-4.8 2.3 0 4.5.2 6.5.5 3.4.4 6.6 1.5 9.2 3.3 3.9 2.2 7 5.6 8.7 9.6 1.4 3.3 1.7 7.2.8 11.2l-.5 2.4 2-1.4c1.3-1 2.7-1.8 4.2-2.4 2.6-1.1 5.3-1.7 8-1.7 2.6 0 5 .5 7.2 1.5l1.4.6-.1-1.6-.6-6.7-.1-1.1-1 .3-3.1.8-.5-11.4 22.8-7.3-.2 8.9 1.7.4 5-9.5 14.9 13.2.6.6.6-.6c2-1.9 4.5-3.5 7.2-4.6l1.1-.5-.8-1-2.7-3.3L155 3.1l9 13.4-13.7 7.4-3 1.6 3.5.1c6.5.1 12.3 2.9 16.2 7.7l1.4 1.8.9 1.1-1.5 1.6-1 1.1-3.4 3.7-.6.7.7.6 3.2 2.9 1.2 1.1.3-1.6 1.2-7.6.3-2 .3-2 1.8-11.3h17l.1-.8.3-1.9H204l3.6 22.6.2 1.5 1.2-.9c1.5-1.1 3.1-1.9 4.8-2.6 2.3-.9 4.6-1.3 7-1.3 2.8 0 5.5.6 7.8 1.9.1 0 .1.1.3.2l1.1.4.1-1.2.3-2.5.1-.8-.8-.2-3-.7-.1-11.8 22.9 5 1.7 8.5h1.8l1.8-7.3 19.1 4.6L254.3 95l-13.9-4.4-.1-5.4v-.8l-.8-.1-13.9-2 .8-7.1.2-1.7-1.5.8c-.7.4-1.4.7-2.1.9-2.3.9-4.6 1.3-6.9 1.3-.7 0-1.3 0-2-.1l-1.2-.1.2 1.2 1 6.2-20.3-3.6-1.1-9.2-.3-3-1.4 2.6-2.3 4.5-4.3-7.9-1.3-2.4-.4 2.7-.9 6.1-17.8-2.8 1.4-8.4.3-1.9-1.7 1c-2.9 1.7-6.3 3.1-10.2 4-1.4.3-2.8.6-4.3.7l-.8.1V83l-35-17.3-1.3-.6v16.3l-15.7 2.3-.7-7.1-.2-1.9-1.4 1.3c-2.1 2-4.4 3.6-6.9 4.7-2.6 1.1-5.3 1.7-7.9 1.7-2.7 0-5.2-.6-7.5-1.6-4.2-2-7.3-5.7-8.6-10.4-.6-2.2-.8-4.5-.5-6.9l.3-2.5-1.8 1.8c-1.3 1.2-2.7 2.4-4.2 3.5l-.5.4.2.6 5.3 20.2.9 3.6-3.5 1.1-9.9 3.2-3.4.9zM50.8 42c-.5 0-1 0-1.6.1l-.7.1-1 .2.3 1 .2.6 2.8 9.3.3.9.4 1.3 1-.9.7-.6c2.8-2.5 3.7-5 3.1-8.2-.4-1.9-1.8-2.8-2.7-3.2-.6-.4-1.7-.6-2.8-.6zm76.2.3l-1.8 1.7-4.7 4.5-1 1 1.3.5 5 1.9 1.5.6-.3-1.6c-.4-2.1-.5-4.2-.3-6.2l.3-2.4zm20.4-5.2c-1.9 0-3.8.8-5.1 2.3-2 2.2-2.4 5.5-1 8.1l.4.7.6 1.1.9-1 .6-.6 6.9-7.8.5-.6.9-1-1.2-.5-.8-.3c-1-.2-1.8-.4-2.7-.4z" />
            </Logo>
        </Nav>
    );

};


