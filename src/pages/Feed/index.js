import classNames from 'classnames/bind';
import styles from './Feed.module.css';
import Songs from '~/components/Songs/SongInfo';
import { CopyIcon, HeartIcon, MoreIcon, PlayIcon, RepostIcon, ShareIcon } from '~/components/Icons/Icons';
import Footer from '~/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import LIBRARY_TRACKS from '~/components/Songs/LibraryTracks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);
function Feed({ song, handleSetSong }) {
    const track = song;
    const [search, setSearch] = useState('');
    const inputRef = useRef();
    const LIKED_TRACKS = Songs;
    const [likedTracks, setLikedTracks] = useState(LIKED_TRACKS);
    const a = Songs.map((song) => {
        if (song.isHeart === undefined) {
            song.isHeart = false;
            return song;
        } else return song;
    });
    const [songs, setSongs] = useState(a);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearch(searchValue);
    };
    function nomalize(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        return str;
    }
    useEffect(() => {
        setTimeout(() => {
            if (search.length === 0) setLikedTracks(LIKED_TRACKS);
            const tempTracks = LIKED_TRACKS.filter((track) => {
                let trackInfo = track.name + ' ' + track.artist;
                trackInfo = trackInfo.toLowerCase();

                return nomalize(trackInfo).includes(nomalize(search));
            });
            setLikedTracks(tempTracks);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, 300);
    }, [search]);
    const handleClick = (event, song, Songs, index) => {
        handleSetSong(song, Songs, index);
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
    const handleClick2 = (event) => {
        event.stopPropagation();
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
        <div className={cx('feed-wrapper')}>
            <ToastContainer />
            <div className={cx('playing-song')}>
                <img src={track.img} alt={track.name} />
                <div className={cx('song-info')}>
                    <p className={cx('song-name')}>{track.name}</p>
                    <p className={cx('song-artist')}> - {track.artist}</p>
                </div>
            </div>
            <div className={cx('title')}>
                <p>All Songs</p>
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Filter"
                        value={search}
                        spellCheck={false}
                        onChange={(e) => handleChange(e)}
                    />
                    {!!search && (
                        <button
                            onClick={() => {
                                setSearch('');
                                inputRef.current.focus();
                            }}
                            className={cx('clear-btn')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                </div>
            </div>
            <div className={cx('song-list')}>
                {likedTracks.map((song, index) => {
                    return (
                        <div
                            className={cx('playlist-track', { active: song === track })}
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
            <Footer />
        </div>
    );
}

export default Feed;
