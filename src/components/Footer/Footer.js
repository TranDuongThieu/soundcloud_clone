import classNames from 'classnames/bind';
import styles from './Footer.module.css';
const cx = classNames.bind(styles);
const FOOTER_CONTENT = [
    'Legal',
    'Privacy',
    'Cookie',
    'Policy',
    'Consent',
    'Manager',
    'Imprint',
    'Artist',
    'Resources',
    'Blog',
    'Charts',
];
function Footer() {
    return (
        <div className={cx('footer')}>
            {FOOTER_CONTENT.map((item, index) => (
                <span key={index}>{item} - </span>
            ))}
            <div className={cx('footer-language')}>
                <span>Language: </span>
                <span>English(US)</span>
            </div>
        </div>
    );
}

export default Footer;
