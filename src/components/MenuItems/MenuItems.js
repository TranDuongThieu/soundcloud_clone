import classNames from 'classnames/bind';
import styles from './MenuItems.module.css';
const cx = classNames.bind(styles);
function MenuItem({ title, icon, border_bottom }) {
    return (
        <div
            className={cx('menu-item', {
                border_bottom: border_bottom,
            })}
        >
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('menu-title')}>{title}</span>
        </div>
    );
}

export default MenuItem;
