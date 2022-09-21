import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faMessage } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.css';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok_logo" />
                </div>

                <Tippy
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
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
                        <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
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
                                <span> Tải lên</span>
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
                    <Button>Đăng nhập</Button>
                    <Tippy content="setting">
                        <div className={cx('setting-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
