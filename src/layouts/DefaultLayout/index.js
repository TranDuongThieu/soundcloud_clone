import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.css';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
