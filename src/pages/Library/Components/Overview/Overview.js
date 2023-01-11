import classNames from 'classnames/bind';
import styles from './Overview.module.css';
import LIBRARY_TRACKS from '../../../../components/Songs/LibraryTracks';
import TrackItem from '../TrackItem/TrackItem';
const cx = classNames.bind(styles);
function Overview() {
    return (
        <div className={cx('container')}>
            {LIBRARY_TRACKS.map((item, index) => {
                if (item.tracks.length < 6) {
                    for (let i = item.tracks.length; i < 6; i++) item.tracks.push('none');
                }
                while (item.tracks.length > 6 && item.tracks[item.tracks.length - 1] === 'none') item.tracks.pop();
                const newArray = item.tracks.slice(0, 5);
                newArray.push('none');
                return (
                    <div key={index}>
                        <div className={cx('header')}>
                            <span>{item.title}</span>
                        </div>
                        <div className={cx('content-container')}>
                            {newArray.map((track, i) => {
                                return <TrackItem track={track} i={i} key={i} />;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Overview;
