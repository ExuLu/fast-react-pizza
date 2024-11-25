import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

const UpdateItemQuantity = ({ pizzaId }) => {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();

  const handleDecreaseItemQuantity = () => {
    if (currentQuantity < 0) return;

    if (currentQuantity === 1) {
      dispatch(deleteItem(pizzaId));
      return;
    }

    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button handleClick={handleDecreaseItemQuantity} type='round'>
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button
        handleClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type='round'
      >
        +
      </Button>
    </div>
  );
};

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number,
};

export default UpdateItemQuantity;
