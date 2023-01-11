import classNames from 'classnames/bind';
import styles from './Background.module.css';
const cx = classNames.bind(styles);
function Background() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('surface')}></div>
            <div className={cx('car')}>
                <img src="./asset/img/feed/Img_06.png" alt="" />
            </div>
        </div>
    );
}

export default Background;
