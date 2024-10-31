import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = (children, to) => (
  <Link
    className='text-sm text-blue-500 hover:text-blue-600 hover:underline'
    to={to}
  >
    {children}
  </Link>
);

LinkButton.propTypes = {
  children: PropTypes.element || PropTypes.string,
  to: PropTypes.string,
};

export default LinkButton;
