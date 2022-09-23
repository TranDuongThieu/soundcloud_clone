import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const cx = classNames.bind(styles);
function Button({ to, href, primary, small, medium, large, outline, type, children, onClick, ...passProps }) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
    });
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
