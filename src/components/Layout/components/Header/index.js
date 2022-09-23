import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.css';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/PopperMenu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        top: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok_logo" />
                </div>

                <Tippy
                    placement="bottom"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    interactive={true}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading-btn')} icon={faSpinner} />
                        <span className={cx('stick')}></span>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <div className={cx('update-icon')}>
                        <a href="#update-icon">
                            <div className={cx('upload')}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Upload</span>
                            </div>
                        </a>
                    </div>
                    {/* <div className={cx('paperlane-icon')}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className={cx('message-icon')}>
                        <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <div className={cx('avt-icon')}></div> */}
                    <Button
                        primary
                        href="https://fullstack.edu.vn/learning/reactjs?id=5437f73d-b1ba-46d7-8ceb-85e13f7e447e"
                        target="_blank"
                    >
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('setting-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
