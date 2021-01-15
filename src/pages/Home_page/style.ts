import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f1f1f1;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15vh;
    grid-template-areas: "header" "main";
`;

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100%;

    background-color: green;
`;

export const BodyContainer = styled.main`
    width: 100%;
    height: 100%;

    background-color: greenyellow;
`;