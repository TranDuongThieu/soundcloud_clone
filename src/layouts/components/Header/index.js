import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faGear,
    faArrowRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Images';
import styles from './Header.module.css';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/PopperMenu';
import { useState } from 'react';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Search from '~/layouts/components/Search';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const PROFILE_SETTING = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/my-profile',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: '/get-coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        classname: 'log_out',
    },
];
function Header() {
    const handleMenuChange = (menuItem) => {
        //
    };
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok_logo" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    <div className={cx('update-icon')}>
                        <a href="#update-icon">
                            <div className={cx('upload')}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Upload</span>
                            </div>
                        </a>
                    </div>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy content="Message">
                                    <div className={cx('user-message')}>
                                        <MessageIcon />
                                    </div>
                                </Tippy>
                                <Tippy content="Inbox">
                                    <div className={cx('user-inbox')}>
                                        <InboxIcon />
                                        <span className={cx('inbox-count')}>15</span>
                                    </div>
                                </Tippy>
                                <Menu items={PROFILE_SETTING}>
                                    <div className={cx('user-avatar')}>
                                        <Image
                                            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/12ac62e53038f3abe8ac436262de3b3e.jpeg?x-expires=1664179200&x-signature=9vI1130OK8Jh4yHaBznqebmLsys%3D"
                                            alt="avatar"
                                        ></Image>
                                    </div>
                                </Menu>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => {
                                    setCurrentUser(!currentUser);
                                }}
                                primary
                                target="_blank"
                            >
                                Log in
                            </Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('setting-icon')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Header;
