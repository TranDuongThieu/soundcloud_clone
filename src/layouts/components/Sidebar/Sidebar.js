import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import SideBarItem from '~/components/SidebarItems';
import styles from './Sidebar.module.css';
import { useRef } from 'react';
import { SIDEBAR_MENU, SIDEBAR_ARTISTS } from './SidebarContent';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Songs from '~/pages/Home/SongInfo';
const cx = classNames.bind(styles);
const FOOTER_CONTENT = [
    'Legal',
    'Privacy',
    'Cookie',
    'Policy',
    'Consent',
    'Manager',
    'Imprint',
    'Artist',
    'Resources',
    'Blog',
    'Charts',
];
function Sidebar() {
    const handleHidden = () => {
        mobileRef.current.style.display = 'none';
    };
    const mobileRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <SideBarItem item={SIDEBAR_MENU[0]} children={SIDEBAR_ARTISTS} artist />
                <SideBarItem item={SIDEBAR_MENU[1]} children={Songs} />
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
                <div className={cx('footer')}>
                    {FOOTER_CONTENT.map((item, index) => (
                        <span key={index}>{item} - </span>
                    ))}
                    <div className={cx('footer-language')}>
                        <span>Language: </span>
                        <span>English(US)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
