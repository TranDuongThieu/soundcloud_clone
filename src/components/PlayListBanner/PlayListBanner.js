import styles from './PlayListBanner.module.css';
import classNames from 'classnames/bind';
import Songs from '~/components/Songs/SongInfo';
import { CopyIcon, HeartIcon, MoreIcon, PlayIcon, RepostIcon, ShareIcon } from '../Icons/Icons';
import React, { useState } from 'react';
import LIBRARY_TRACKS from '~/components/Songs/LibraryTracks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);
function PlayListBanner(props) {
    const a = Songs.map((song) => {
        if (song.isHeart === undefined) {
            song.isHeart = false;
            return song;
        } else return song;
    });
    const [songs, setSongs] = useState(a);

    const handleSetSong = props.handleSetSong;
    const handleClick = (event, song, Songs, index) => {
        handleSetSong(song, Songs, index);
        event.stopPropagation();
    };
    const handleClick2 = (event) => {
        event.stopPropagation();
    };
    const toggleHeart = (songId, song) => {
        const tempArr = songs.map((song, index) => {
            if (index === songId) {
                song.isHeart = !song.isHeart;
                if (song.isHeart === true && LIBRARY_TRACKS[1].tracks.indexOf(song) === -1) {
                    LIBRARY_TRACKS[1].tracks.unshift(song);
                    toast(<Toast song={song} />, { autoClose: 2000 });
                }
                if (song.isHeart === false) {
                    LIBRARY_TRACKS[1].tracks.splice(LIBRARY_TRACKS[1].tracks.indexOf(song), 1);
                }
                return song;
            }
            return song;
        });

        setSongs(tempArr);
    };
    function Toast({ song }) {
        var songInfo = song.name + ' | ' + song.artist;
        if (songInfo.length > 27) songInfo = songInfo.slice(0, 25) + '...';

        return (
            <div className={cx('toast')}>
                <img src={song.img} alt="" className={cx('toast-img')} />
                <div className={cx('toast-info')}>
                    <span className={cx('toast_song-name')}>{songInfo}</span>
                    <span>was saved to your Library</span>
                </div>
            </div>
        );
    }
    return (
        <div className={cx('playlist-container')}>
            <ToastContainer />
            <div className={cx('playlist-header')}>
                <span>{props.title}</span>
            </div>
            <div
                className={cx('playlist-content', {
                    background1: props.background_gradient_1,
                    background2: props.background_gradient_2,
                })}
            >
                <img className={cx('playlist-img')} src={props.img} alt="" />
                <div className={cx('playlist-track_info')}>
                    {Songs.map((song, index) => {
                        return (
                            <div
                                className={cx('playlist-track')}
                                key={index}
                                onClick={(event) => handleClick(event, song, Songs, index)}
                            >
                                <div className={cx('playlist-track_info-left')}>
                                    <span>
                                        {song.artist} - {song.name}
                                    </span>
                                </div>
                                <div className={cx('playlist-track_info-right')}>
                                    <div className={cx('playlist-info')}>
                                        <PlayIcon color={'white'} />
                                        <span>{song.plays}</span>
                                    </div>
                                    <div className={cx('playlist-icon')} onClick={handleClick2}>
                                        <div onClick={() => toggleHeart(song.id, song)}>
                                            <HeartIcon color={song.isHeart ? 'red' : 'white'} />
                                        </div>
                                        <div>
                                            <RepostIcon color={'white'} />
                                        </div>
                                        <div>
                                            <CopyIcon color={'white'} />
                                        </div>
                                        <div>
                                            <ShareIcon color={'white'} />
                                        </div>
                                        <div>
                                            <MoreIcon color={'white'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('playlist-footer')}>
                <div className={cx('playlist-footer-left')}>
                    <div className={cx('playlist-footer-left-img')}>
                        {props.artist.map((item, index) => (
                            <img src={item.img} alt={item.name} key={index} />
                        ))}
                    </div>
                    <span>Based on your listening history</span>
                </div>
                <div className={cx('playlist-footer-right')}>
                    <button>Go to playlist</button>
                </div>
            </div>
        </div>
    );
}

export default PlayListBanner;
