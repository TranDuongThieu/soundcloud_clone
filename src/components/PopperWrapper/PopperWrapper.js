import MenuItem from '~/components/MenuItems';
import classNames from 'classnames/bind';
import styles from './Popper.module.css';
const cx = classNames.bind(styles);
function PopperWrapper({ data = [] }) {
    return (
        <div className={cx('menu-wrapper')}>
            {data.map((item, index) => (
                <MenuItem key={index} title={item.title} icon={item.icon} border_bottom={item.border_bottom} />
            ))}
        </div>
    );
}

export default PopperWrapper;
