import PropTypes from 'prop-types';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img src={data.avatar} alt={data.full_name} className={cx('avartar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name} </span>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountsItem.propTypes = {
    data: PropTypes.object,
};

export default AccountsItem;
