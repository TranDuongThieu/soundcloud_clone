import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import SideBarItem from '~/components/SidebarItems';
import styles from './Sidebar.module.css';
import { useRef } from 'react';
import { SIDEBAR_MENU, SIDEBAR_ARTISTS } from './SidebarContent';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Songs from '~/components/Songs/SongInfo';
import Footer from '~/components/Footer/Footer';
import LIBRARY_TRACKS from '~/components/Songs/LibraryTracks';
const cx = classNames.bind(styles);

function Sidebar() {
    const handleHidden = () => {
        mobileRef.current.style.display = 'none';
    };
    const mobileRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <SideBarItem item={SIDEBAR_MENU[0]} children={SIDEBAR_ARTISTS} artist />
                <SideBarItem item={SIDEBAR_MENU[1]} children={LIBRARY_TRACKS[1].tracks} />
                <SideBarItem item={SIDEBAR_MENU[2]} children={Songs} />
                <div className={cx('go-mobile')} ref={mobileRef}>
                    <div className={cx('go-mobile-header')}>
                        <span>Go mobie</span>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleHidden} />
                    </div>
                    <div className={cx('go-mobile-content')}>
                        <img src="./asset/img/gomobile/ios.jpg" alt="" />
                        <img src="./asset/img/gomobile/android.jpg" alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default Sidebar;
