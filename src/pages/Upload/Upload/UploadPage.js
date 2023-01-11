import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './UploadPage.module.scss';
const cx = classNames.bind(styles);
function UpLoadPage() {
    window.scrollTo(0, 0);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('left-header')}>
                        <div className={cx('left-header-title')}>
                            <p>0% of free uploads used</p>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className={cx('dark-bg')}></div>
                        <span>
                            <a href="/#">Try Next Pro</a> to get unlimited uploads.
                        </span>
                    </div>
                    <div className={cx('right-header')}>Try Next Pro</div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('title')}>
                        <p>Drag and drop your tracks & albums here</p>
                    </div>
                    <button>or choose files to upload</button>
                    <div className={cx('check')}>
                        <input type="checkbox" checked disabled name="upload-checkbox" />
                        <label htmlFor="upload-checkbox"> Make a playlist when multiple files are selected</label>
                    </div>
                    <div className={cx('radio')}>
                        <span> Privacy: </span>
                        <input type="radio" name="privacy" checked="checked" value="public" id="public" />
                        <label htmlFor="public">Public</label>
                        <input type="radio" name="privacy" value="private" id="private" />
                        <label htmlFor="private">Private</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpLoadPage;
