import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, isDisabled, to, type }) => {
  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-600 ';

  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 md: px-5 py-2.5 text-xs',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string || PropTypes.element,
  isDisabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
