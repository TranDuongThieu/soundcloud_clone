import classNames from 'classnames/bind';
import styles from './AccountItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Images';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <div className={cx('shape')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    {data.full_name}
                    {data.tick && (
                        <span className={cx('icon-check')}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                    )}
                </p>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
