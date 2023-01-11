import classNames from 'classnames/bind';
import Footer from '~/components/Footer/Footer';
import styles from './Upload.module.css';
import UpLoadPage from './Upload/UploadPage';
const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <UpLoadPage />
            </div>
            <Footer />
        </div>
    );
}

export default Upload;
