import classNames from 'classnames/bind';
import styles from './Albums.module.css';
const cx = classNames.bind(styles);
function Albums() {
    return (
        <div className={cx('wrapper')}>
            <img src="./asset/img/library/album.png" alt="" />
            <span>You haven't liked any albums yet</span>
            <a href="/#">Browse trending playlists</a>
        </div>
    );
}

export default Albums;
