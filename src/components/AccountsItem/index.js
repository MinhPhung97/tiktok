import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1662108204592130.jpeg?x-expires=1653289200&x-signature=sQQLknKDC34NDD3MKyz%2B%2Fwtvy8U%3D"
                alt="nguyenvanaaa"
                className={cx('avartar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Melodyyy</span>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                </h4>
                <span className={cx('username')}>melodyyyyyyyyy</span>
            </div>
        </div>
    );
}

export default AccountsItem;
