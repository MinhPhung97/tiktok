import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    dissible = false,
    plusIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (dissible) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        dissible,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {plusIcon && <span className={cx('icon')}>{plusIcon}</span>}
            <span className={cx('tittle')}>{children}</span>
        </Comp>
    );
}

export default Button;
