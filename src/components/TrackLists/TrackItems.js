import classNames from 'classnames/bind';
import styles from './TrackItems.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SampleNextArrow(props) {
    const { onClick } = props;
    return <FontAwesomeIcon onClick={onClick} className={cx('next-arrow')} icon={faChevronRight} />;
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return <FontAwesomeIcon onClick={onClick} className={cx('prev-arrow')} icon={faChevronLeft} />;
}

function TrackItems({ handleSetSong, Songs, title, suptitle }) {
    let settings = {
        speed: 800,
        slidesToShow: 4.2,
        slidesToScroll: 4,
        dots: false,
        infinite: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('container')}>
            <p className={cx('track-title')}>{title}</p>
            <span className={cx('track-suptitle')}>{suptitle}</span>
            <div className={cx('track-list')}>
                <Slider {...settings}>
                    {Songs.map((song, index) => {
                        let songInfo = song.name + ' ( ' + song.artist + ' ) ';
                        if (songInfo.length > 22) songInfo = songInfo.slice(0, 22) + '...';
                        return (
                            <div
                                className={cx('track-item')}
                                key={index}
                                onClick={() => handleSetSong.handleSetSong(song, Songs, index)}
                            >
                                <div className={cx('track-play')}>
                                    <img className={cx('track-img')} src={song.img} alt={song.name} />
                                    <div className={cx('song-play-btn')}></div>
                                    <div className={cx('shadow')}></div>
                                </div>
                                <p className={cx('song-name')}>{songInfo}</p>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default TrackItems;
