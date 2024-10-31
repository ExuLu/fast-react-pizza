import PropTypes from 'prop-types';

const Button = ({ children, isDisabled }) => (
  <button
    className='inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-600 sm:px-6 sm:py-4'
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string || PropTypes.element,
  isDisabled: PropTypes.bool,
};

export default Button;
