import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, PlayIcon, RepostIcon, TrackIcon, UsersIcon } from '../Icons/Icons';
import styles from './SidebarItem.module.css';

const cx = classNames.bind(styles);
function SideBarItem({ item, children, artist }) {
    let randomIndex = Math.floor(Math.random() * (children.length - 4));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                    {item.title.icon}
                    <span className={cx('title-span')}>{item.title.content}</span>
                </div>
                <div className={cx('button')}>
                    {item.button.icon}
                    <span className={cx('title-span')}>{item.button.content}</span>
                </div>
            </div>
            <div className={cx('content')}>
                {artist &&
                    children.map((item, index) => (
                        <div className={cx('sidebar-item')} key={index}>
                            <div className={cx('sidebar-item-left')}>
                                <img src={item.img} alt="" />
                                <div className={cx('info')}>
                                    <span>{item.name}</span>
                                    <div className={cx('info-details')}>
                                        <span>
                                            <UsersIcon />
                                            {item.followers}
                                        </span>
                                        <span>
                                            <TrackIcon />
                                            {item.tracks}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faUserPlus} />
                                <span>Follow</span>
                            </button>
                        </div>
                    ))}
                {artist ||
                    children.slice(randomIndex, randomIndex + 3).map((item, index) => {
                        let trackInfo = item.name + ' | ' + item.artist;
                        if (trackInfo.length > 29) trackInfo = trackInfo.slice(0, 29) + '...';
                        return (
                            <div className={cx('sidebar-item')} key={index}>
                                <div className={cx('sidebar-item-left')}>
                                    <img className={cx('sidebar-item-left-img')} src={item.img} alt="" />
                                    <div className={cx('sidebar-item-left-info')}>
                                        <div>
                                            <span>{item.uploader}</span>
                                        </div>
                                        <span>{trackInfo}</span>
                                        <div className={cx('info-details')}>
                                            <span>
                                                <PlayIcon />
                                                {item.plays}
                                            </span>
                                            <span>
                                                <HeartIcon />
                                                {item.hearts}
                                            </span>
                                            <span>
                                                <RepostIcon />
                                                {item.reposts}
                                            </span>
                                            <span>
                                                <CommentIcon />
                                                {item.comments}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default SideBarItem;
