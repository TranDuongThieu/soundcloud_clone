import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    small,
    medium,
    large,
    outline,
    type,
    children,
    onClick,
    classname,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        classname,
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
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    classname: PropTypes.string,
};

export default Button;
