import React, {
    useState,
    useEffect,
} from "react";
import Axios from "../../config/axios.config";

import {
    HomeContainer,
    BodyContainer,
    HeaderContainer,
    MusicsContainer
} from "./style";

import {
    FaStarHalfAlt,
    FaHeart,
} from "react-icons/fa";

interface Music_Data {
    music_id: number;
    music_url: string;
    music_extension: string;
}

export default function Home() {
    const [musics, setMusics] = useState([]);

    useEffect(() => {
        (async () => {
            Axios.get("music_database_index")
                .then(({ data }) => setMusics(currentMusics => data.musics));
        })();
    }, []);

    return <HomeContainer>
        <HeaderContainer></HeaderContainer>
        <BodyContainer>

            {musics.map((music: Music_Data) => (
                <MusicsContainer key={music.music_id}>
                    <audio
                        src={music.music_url}
                        controls>
                    </audio>
                    <div className="music_options">
                        <FaStarHalfAlt className="favorite-icon" />
                        <FaHeart className="like-icon" />
                    </div>
                </MusicsContainer>
            ))}

        </BodyContainer>
    </HomeContainer>
}