import classNames from 'classnames/bind';
import styles from './TrackItem.module.css';
import { HeartIcon } from '~/components/Icons/Icons';
const cx = classNames.bind(styles);
function TrackItem(props) {
    const track = props.track;
    let songInfo = track.name + ' ( ' + track.artist + ' ) ';
    if (track.name === undefined) songInfo = '';
    if (songInfo.length > 22) songInfo = songInfo.slice(0, 22) + '...';
    return (
        <div className={cx('track-item')}>
            <div className={cx('track-play')}>
                <img className={cx('track-img')} src={track.img} alt={track.name} />
                {songInfo && (
                    <div>
                        <div className={cx('song-play-btn')}></div>
                        <div className={cx('shadow')}></div>
                        {/* <HeartIcon /> */}
                    </div>
                )}
            </div>
            <p className={cx('song-name')}>{songInfo}</p>
        </div>
    );
}

export default TrackItem;
