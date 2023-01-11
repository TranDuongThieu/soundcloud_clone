import classNames from 'classnames/bind';
import styles from './Stations.module.css';
const cx = classNames.bind(styles);
function Stations() {
    return (
        <div className={cx('wrapper')}>
            <img src="./asset/img/library/stations.png" alt="" />
            <span>You haven't liked any stations yet</span>
            <a href="/#">Browse trending playlists</a>
        </div>
    );
}

export default Stations;
