import { faAngleDown, faBell, faEllipsis, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.css';
import TippyHeadless from '@tippyjs/react/headless';
import PopperWrapper from '~/components/PopperWrapper';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LeftHeader from '~/components/LeftHeader';

import {
    ProfileIcon,
    HeartIcon,
    PlaylistIcon,
    StationIcon,
    UsersIcon,
    UsersIcon2,
    StarIcon,
    TrackIcon,
    DistributeIcon,
} from '~/components/Icons/Icons';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
const PROFILE_MENU = [
    {
        title: 'Profile',
        icon: <ProfileIcon />,
    },
    {
        title: 'Likes',
        icon: <HeartIcon />,
    },
    {
        title: 'Playlists',
        icon: <PlaylistIcon />,
    },
    {
        title: 'Stations',
        icon: <StationIcon />,
    },
    {
        title: 'Followings',
        icon: <UsersIcon />,
    },
    {
        title: 'Who to follow',
        icon: <UsersIcon2 />,
    },
    {
        title: 'Try Next Pro',
        icon: <StarIcon />,
    },
    {
        title: 'Tracks',
        icon: <TrackIcon />,
    },
    {
        title: 'Distribute',
        icon: <DistributeIcon />,
    },
];
const SETTING_MENU = [
    {
        title: 'About us',
    },
    {
        title: 'Legal',
    },
    {
        title: 'Copyright',
        border_bottom: true,
    },
    {
        title: 'Mobile apps',
    },
    {
        title: 'For Creator',
    },
    {
        title: 'Blog',
    },
    {
        title: 'Jobs',
    },
    {
        title: 'Developers',
        border_bottom: true,
    },
    {
        title: 'Support',
    },
    {
        title: 'Keyboard shortcuts',
        border_bottom: true,
    },
    {
        title: 'Subscription',
    },
    {
        title: 'Setting',
    },
    {
        title: 'Sign out',
    },
];
const LEFT_HEADER = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'Feed',
        to: '/feed',
    },
    { title: 'Library', to: '/library' },
];
function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [black, setBlack] = useState('');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-content')}>
                <NavLink to="/" className={(nav) => cx('header-logo', { active: true })}>
                    <div className={cx('logo')}></div>
                </NavLink>
                {LEFT_HEADER.map((item, index) => (
                    <LeftHeader key={index} title={item.title} to={item.to} />
                ))}

                <div className={cx('header-search')}>
                    <form>
                        <input
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                        <button className={cx('search-icon')} type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
                <div className={cx('header-item-right', 'red-color')}>
                    <NavLink to="/trynextpro">Try Next Pro</NavLink>
                </div>
                <div>
                    <NavLink className={(nav) => cx('header-item-right', { active: nav.isActive })} to="/upload">
                        Upload
                    </NavLink>
                </div>
                <TippyHeadless
                    appendTo={document.body}
                    offset={[0, 0]}
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <PopperWrapper data={PROFILE_MENU} />
                        </div>
                    )}
                    placement="bottom-start"
                    trigger="click"
                    interactive="true"
                >
                    <div
                        className={cx('header-item-right', 'add-padding', black)}
                        onClick={() => (black === '' ? setBlack('black') : setBlack(''))}
                    >
                        <div className={cx('header-info')}>
                            <img src="https://i1.sndcdn.com/avatars-000791238640-qf17sq-t500x500.jpg" alt="avatar" />
                            <div className={cx('info')}>
                                <span className={cx('name')}>thieu</span>
                                <FontAwesomeIcon className={cx('info-icon')} icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                </TippyHeadless>

                <NavLink to="/notification" className={(nav) => cx('right-icon', { active: nav.isActive })}>
                    <FontAwesomeIcon icon={faBell} />
                </NavLink>

                <NavLink to="/messages" className={(nav) => cx('right-icon', { active: nav.isActive })}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>

                <TippyHeadless
                    appendTo={document.body}
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <PopperWrapper data={SETTING_MENU} />
                        </div>
                    )}
                    trigger="click"
                    interactive="true"
                    offset={[-54, 0]}
                    delay={[0, 0]}
                >
                    <div to="/setting" className={cx('right-icon', 'size-medium', 'add-padding')}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </TippyHeadless>
            </div>
        </div>
    );
}

export default Header;
