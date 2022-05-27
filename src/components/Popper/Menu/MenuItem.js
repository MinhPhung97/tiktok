import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} plusIcon={data.icon} to={data.to} onClick={onClick}>
            {data.titile}
        </Button>
    );
}

export default MenuItem;
