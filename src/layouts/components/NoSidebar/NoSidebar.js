import Header from '../Header/Header';
import styles from './NoSidebar.module.css';
import classNames from 'classnames/bind';
import PlayControls from '../PlayControls/PlayControls';

const cx = classNames.bind(styles);
function NoSidebar({ song, handleSetSong, listSong, indexCurrentSong, children }) {
    const Page = () => children;
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Page />
                </div>
            </div>
        </div>
    );
}

export default NoSidebar;
