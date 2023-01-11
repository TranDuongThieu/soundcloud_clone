import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Library.module.css';
import Overview from './Components/Overview/Overview';
import Likes from './Components/Likes/Likes';
import Stations from './Components/Stations/Stations';
import Albums from './Components/Albums/Albums';
import Footer from '~/components/Footer/Footer';
const cx = classNames.bind(styles);

function Library(handleSetSong) {
    window.scrollTo(0, 0);

    const headerItems = ['Overview', 'Likes', 'Albums', 'Stations'];
    const [header, setHeader] = useState(headerItems[0]);
    let content;
    switch (header) {
        case 'Overview':
            content = <Overview handleSetSong />;
            break;
        case 'Likes':
            content = <Likes />;
            break;
        case 'Albums':
            content = <Albums />;
            break;
        case 'Stations':
            content = <Stations />;
            break;
        default:
            content = null;
    }

    return (
        <div className={cx('container')}>
            <ul className={cx('header')}>
                {headerItems.map((item, index) => (
                    <div
                        key={index}
                        className={cx('header-item', { active: item === header })}
                        onClick={() => setHeader(item)}
                    >
                        <li key={index}>{item}</li>
                    </div>
                ))}
            </ul>
            <div className={cx('content')}>{content}</div>
            <Footer />
        </div>
    );
}

export default Library;
