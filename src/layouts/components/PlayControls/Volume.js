import classNames from 'classnames/bind';
import styles from './Volume.module.css';
const cx = classNames.bind(styles);
function Volume() {
    return (
        <div className={cx('volume-container')}>
            <input type="range" className={cx('volume-range')} />
        </div>
    );
}

export default Volume;
