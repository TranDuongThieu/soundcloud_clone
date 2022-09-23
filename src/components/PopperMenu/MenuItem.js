import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './PopperMenu.css';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('button-nopadding')} to={data.to}>
            <div className={cx('wrapper')}>
                <div className={cx('setting-icon')}>{data.icon}</div>
                <div className={cx('setting-title')}>{data.title}</div>
            </div>
        </Button>
    );
}

export default MenuItem;
