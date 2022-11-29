import classNames from 'classnames/bind';
import styles from './DefaultLayouts.module.css';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';
import PlayControls from '~/layouts/components/PlayControls/PlayControls';

const cx = classNames.bind(styles);

function DefaultLayouts({ song, handleSetSong, listSong, indexCurrentSong, children }) {
    const Page = () => children;
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Page />
                </div>
                <Sidebar />
            </div>
            <PlayControls
                track={song}
                handleSetSong={handleSetSong}
                listSong={listSong}
                indexCurrentSong={indexCurrentSong}
            />
        </div>
    );
}

export default DefaultLayouts;
