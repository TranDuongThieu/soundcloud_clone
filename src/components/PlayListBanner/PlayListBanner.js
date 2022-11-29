import styles from './PlayListBanner.module.css';
import classNames from 'classnames/bind';
import Songs from '~/pages/Home/SongInfo';
import { PlayIcon } from '../Icons/Icons';
const cx = classNames.bind(styles);
function PlayListBanner(props) {
    console.log(props.background_gradient_1);
    return (
        <div className={cx('playlist-container')}>
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
                    {Songs.map((song) => (
                        <div className={cx('playlist-track')}>
                            <div className={cx('playlist-track_info-left')}>
                                <span>
                                    {song.artist} - {song.name}
                                </span>
                            </div>
                            <div className={cx('playlist-track_info-right')}>
                                <PlayIcon color={'white'} />
                                <span>{song.plays}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlayListBanner;
