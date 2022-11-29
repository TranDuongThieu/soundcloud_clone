import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LeftHeader.module.css';
const cx = classNames.bind(styles);
function LeftHeader({ title, to }) {
    return (
        <NavLink className={(nav) => cx('header-item-left', { active: nav.isActive })} to={to}>
            {title}
        </NavLink>
    );
}

export default LeftHeader;
