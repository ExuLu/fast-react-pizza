import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, isDisabled, to, type, handleClick }) => {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-600 ';

  const styles = {
    primary: base + 'px-4 py-2.5 md:px-6 md:py-3.5',
    small: base + 'px-4 py-2 md: px-5 py-2.5 text-xs',
    secondary:
      'inline-block text-sm px-4 py-2.5 md:px-6 md:py-3.5 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 hover:text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:text-stone-800',
    round: base + 'px-2.5 py-1 md: px-3.5 py-2 text-sm',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (handleClick) {
    return (
      <button
        onClick={handleClick}
        className={styles[type]}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
