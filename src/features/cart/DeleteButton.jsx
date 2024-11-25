import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import { deleteItem } from './cartSlice';

const DeleteButton = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button handleClick={() => dispatch(deleteItem(pizzaId))} type='small'>
      Delete
    </Button>
  );
};

DeleteButton.propTypes = {
  pizzaId: PropTypes.number,
};

export default DeleteButton;
