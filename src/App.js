import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { Fragment } from 'react';
import DefaultLayouts from '~/layouts/DefaultLayouts/DefaultLayouts';
import Songs from '~/components/Songs/SongInfo';
import { useState } from 'react';
import { memo } from 'react';
import PlayControls from './layouts/components/PlayControls/PlayControls';

function App() {
    const [song, setSong] = useState(Songs[0]);
    const [listSong, setListSong] = useState(Songs);
    const [indexCurrentSong, setIndexCurrentSong] = useState(0);
    const handleSetSong = (song, Songs, indexCurrentSong) => {
        setSong(song);
        setListSong(Songs);
        setIndexCurrentSong(indexCurrentSong);
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayouts;
                        if (route.layout) Layout = route.layout;
                        else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout
                                        song={song}
                                        handleSetSong={handleSetSong}
                                        listSong={listSong}
                                        indexCurrentSong={indexCurrentSong}
                                    >
                                        <Page song={song} handleSetSong={handleSetSong} />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <PlayControls
                track={song}
                handleSetSong={handleSetSong}
                listSong={listSong}
                indexCurrentSong={indexCurrentSong}
            />
        </Router>
    );
}

export default memo(App, () => false);
