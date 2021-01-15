import styled from "styled-components";
import {
    FaHeart,
    FaStarHalfAlt,
} from "react-icons/fa";

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

    grid-area: header;
`;

export const BodyContainer = styled.main`
    width: 100%;
    height: 100%;

    background-color: greenyellow;

    grid-area: main;
`;

export const MusicsContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 10vh;
    grid-template-areas: "music_player music_options";

    audio {
        width: 95%;
        /* height: 100%; */

        margin: 0 2.5% 0 2.5%;

        grid-area: music_player;

        display: flex;
        align-self: center;
        justify-self: center;
    };

    div.music_options {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100%;
        grid-template-areas: "like-icon favorite-icon .";
        
        svg.like-icon {
            grid-area: like-icon;

            display: flex;
            align-self: center;
            justify-self: center;
        };

        svg.favorite-icon {
            grid-area: favorite-icon;
            display: flex;
            align-self: center;
            justify-self: center;
        }
    };
`;
