import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './PopperMenu.css';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick, classname }) {
    return (
        <Button className={cx('button-nopadding', classname)} to={data.to} onClick={onClick}>
            <div className={cx('wrapper')}>
                <div className={cx('setting-icon')}>{data.icon}</div>
                <div className={cx('setting-title')}>{data.title}</div>
            </div>
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    classname: PropTypes.string,
};

export default MenuItem;
