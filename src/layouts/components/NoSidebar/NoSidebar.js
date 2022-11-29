import Header from '../Header/Header';
import styles from './NoSidebar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function NoSidebar({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default NoSidebar;
