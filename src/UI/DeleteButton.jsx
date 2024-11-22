import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';
import PropTypes from 'prop-types';

const DeleteButton = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button handleClick={handleDelete} type='small'>
      Delete
    </Button>
  );
};

DeleteButton.propTypes = {
  pizzaId: PropTypes.number,
};

export default DeleteButton;
