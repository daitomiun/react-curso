import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados(){
    let mainCoLor="#db7093",
        mainAlphaColor80="#db709380";

    const setTransitionTime = (time)=>`all ${time} ease-in-out`;

    const fadeIn = keyframes`
        0%{
            opacity: 0;
        }
        20%{
            opacity: .30;
        }
        100%{
            opacity:1;
        }

    
    `

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        background-color:${mainCoLor};
        transition: ${setTransitionTime("1s")};
        color: ${props=> props.color};
        color: ${({color})=> color};
        color: ${({color})=> color|| "#000"};
        animation: ${fadeIn} 2s ease-out;

        ${({isButton})=> isButton && css`
            margin:auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        ` }

        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;

        const light={
            color: "#222",
            bgColor: "#DDD"
        }
        const dark={
            color: "#DDD",
            bgColor: "#222"
        }

        const Box = styled.div`
            padding: 1rem;
            margin: 1rem;
            color:${({theme})=>theme.color};
            background-color:${({theme})=>theme.bgColor};

        `

        const BoxRounded = styled(Box)`
            border-radius: 1rem;
        `

        const GlobalStyle = createGlobalStyle`
            h2{
                padding:2rem;
                background-color:#fff;
                color: #61dafb;
                text-transform: uppercase;
            }

        `
    return(
        <>
        <GlobalStyle/>
        <h2>styled-components</h2>
        <MyH3>hola soy un h3 estilizado con styled-components</MyH3>
        <MyH3 color="#181818">hola soy un h3 estilizado con styled-components</MyH3>
        <MyH3 isButton>soy un h3 estilizado como boton</MyH3>
        <ThemeProvider theme={light}>
            <Box>soy una caja light</Box>
            <BoxRounded>soy una caja redondeada light</BoxRounded>

        </ThemeProvider>
        <ThemeProvider theme={dark}>
            <Box>soy una caja dark</Box>
            <BoxRounded>soy una caja redondeada dark</BoxRounded>

        </ThemeProvider>

        </>
    )
}