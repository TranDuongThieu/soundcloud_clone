import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import styles from './Likes.module.css';
import LIBRARY_TRACKS from '~/components/Songs/LibraryTracks';
import TrackItem from '../TrackItem/TrackItem';
const cx = classNames.bind(styles);
function Likes() {
    const LIKED_TRACKS = LIBRARY_TRACKS[1].tracks;
    const [likedTracks, setLikedTracks] = useState(LIKED_TRACKS);
    const [search, setSearch] = useState('');
    const inputRef = useRef();
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
        }, 500);
    }, [search]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>Hear the tracks you've liked:</span>
                <div className={cx('right-header')}>
                    <span>View</span>
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
            </div>
            <div className={cx('content')}>
                {likedTracks.map((track, i) => {
                    return <TrackItem track={track} i={i} key={i} />;
                })}
            </div>
        </div>
    );
}

export default Likes;
