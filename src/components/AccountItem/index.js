import classNames from 'classnames/bind';
import styles from './AccountItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('shape')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dc60cb071cfa78089851f938d59db628~c5_300x300.webp?x-expires=1663923600&x-signature=YyoRxm1NGoJJDj%2BwlSH8BLpNMUU%3D"
                    alt=""
                />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Nguyen Van A
                    <span className={cx('icon-check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </p>
                <p className={cx('username')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
