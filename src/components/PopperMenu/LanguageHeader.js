import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './PopperMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function LanguageHeader({ title, onBack }) {
    return (
        <header className={cx('language-header')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className={cx('language-title')}>{title}</p>
        </header>
    );
}
LanguageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default LanguageHeader;
