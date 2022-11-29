import {
    faBackwardStep,
    faBars,
    faForwardStep,
    faHeart,
    faPause,
    faPlay,
    faRepeat,
    faShuffle,
    faUserPlus,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './PlayControls.module.css';
import React, { useState, useEffect, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import Volume from './Volume';
const cx = classNames.bind(styles);
function PlayControls({ track, handleSetSong, listSong, indexCurrentSong }) {
    const audioRef = useRef();
    const [play, setPlay] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(1);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(100);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    useEffect(() => {
        if (play) {
            setInterval(() => {
                const _currentTime = audioRef?.current?.currentTime;
                const _duration = audioRef?.current?.duration;
                const _volume = audioRef?.current?.volume;
                setVolume(_volume);
                setCurrentTime(_currentTime);
                setDuration(_duration);
                setProgress(Math.round((_currentTime / _duration) * 100));
            }, 500);
        }
        if (currentTime === duration) {
            handleSetNextSong();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [play, volume, currentTime]);
    const handleChange = (e) => {
        setProgress(e.target.value);
        setCurrentTime(Math.round((e.target.value / 100) * duration));
        audioRef.current.currentTime = Math.round((e.target.value / 100) * duration);
    };
    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const mins = Math.floor(time / 60);
            const secs = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
            return `${mins}:${secs}`;
        }
        return `0:00`;
    };
    const handlePlayTrack = () => {
        if (play) {
            audioRef.current.play();
        } else audioRef.current.pause();
        setPlay((prev) => !prev);
    };
    const handleShuffle = () => {
        setIsShuffle(!isShuffle);
        if (isShuffle) {
            document.querySelector('.shuffle').style.color = '#f50';
        } else document.querySelector('.shuffle').style.color = '#333';
        console.log(isShuffle);
    };
    const handleRepeat = () => {
        setIsRepeat(!isRepeat);
        if (isRepeat) {
            document.querySelector('.repeat').style.color = '#f50';
        } else document.querySelector('.repeat').style.color = '#333';
    };

    let trackInfo = track.name + ' - ' + track.artist;
    if (trackInfo.length > 37) trackInfo = trackInfo.slice(0, 33) + '...';
    const handleSetPrevSong = () => {
        setPlay(true);
        let index = indexCurrentSong;
        if (index - 1 < 0) index = listSong.length - 1;
        else index = index - 1;
        handleSetSong(listSong[index], listSong, index);
        setTimeout(() => {
            setPlay(false);
            audioRef.current.play();
        }, 200);
    };
    const handleSetNextSong = () => {
        let index;
        index = indexCurrentSong;

        index = Math.floor(Math.random() * 27);
        if (index + 1 > listSong.length - 1) index = 0;
        else index = index + 1;
        handleSetSong(listSong[index], listSong, index);
        setTimeout(() => {
            setPlay(false);
            audioRef.current.play();
        }, 200);
    };
    return (
        <div>
            <div className={cx('play-controls')}>
                <audio ref={audioRef} className={cx('audio')} src={track.audio}></audio>
                <div className={cx('container')}>
                    <div className={cx('left-container')}>
                        <FontAwesomeIcon
                            className={cx('set-icon-size')}
                            icon={faBackwardStep}
                            onClick={handleSetPrevSong}
                        />
                        {play ? (
                            <FontAwesomeIcon className={cx('set-icon-size')} onClick={handlePlayTrack} icon={faPlay} />
                        ) : (
                            <FontAwesomeIcon className={cx('set-icon-size')} onClick={handlePlayTrack} icon={faPause} />
                        )}
                        <FontAwesomeIcon
                            className={cx('set-icon-size')}
                            icon={faForwardStep}
                            onClick={handleSetNextSong}
                        />
                        <FontAwesomeIcon
                            className={cx('shuffle', 'set-icon-size')}
                            onClick={handleShuffle}
                            icon={faShuffle}
                        />
                        <FontAwesomeIcon
                            className={cx('repeat', 'set-icon-size')}
                            onClick={handleRepeat}
                            icon={faRepeat}
                        />
                    </div>
                    <div className={cx('center-container')}>
                        <div className={cx('timer')}>
                            <div>{formatTime(currentTime)}</div>
                            <input
                                className={cx('time-during')}
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={progress}
                                onChange={(e) => handleChange(e)}
                            />
                            <div>{formatTime(duration)}</div>
                        </div>
                        <div className={cx('volume')}>
                            <TippyHeadless
                                trigger="click"
                                appendTo={document.body}
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div>
                                            <Volume />
                                        </div>
                                    </div>
                                )}
                                interactive="true"
                                delay={[200, 200]}
                                offset={[0, 67]}
                            >
                                <FontAwesomeIcon className={cx('set-icon-size')} icon={faVolumeHigh} />
                            </TippyHeadless>
                            {/* <FontAwesomeIcon className={cx('set-icon-size')} icon={faVolumeLow} />
                            <FontAwesomeIcon className={cx('set-icon-size')} icon={faVolumeMute} /> */}
                        </div>
                    </div>
                    <div className={cx('right-container')}>
                        <div className={cx('track-info')}>
                            <img src={track.img} alt="" />
                            <div className={cx('info')}>
                                <p className={cx('artist')}>{track.artist}</p>
                                <p className={cx('name')}>{trackInfo}</p>
                            </div>
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon
                                className={cx('set-icon-size')}
                                onClick={(e) =>
                                    e.target.style.color === 'red'
                                        ? (e.target.style.color = 'black')
                                        : (e.target.style.color = 'red')
                                }
                                icon={faHeart}
                            />
                            <FontAwesomeIcon
                                className={cx('set-icon-size')}
                                onClick={(e) =>
                                    e.target.style.color === 'red'
                                        ? (e.target.style.color = 'black')
                                        : (e.target.style.color = 'red')
                                }
                                icon={faUserPlus}
                            />

                            <div>
                                <FontAwesomeIcon
                                    className={cx('set-icon-size')}
                                    onClick={(e) => {
                                        e.target.style.color === 'red'
                                            ? (e.target.style.color = 'black')
                                            : (e.target.style.color = 'red');
                                    }}
                                    icon={faBars}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayControls;
