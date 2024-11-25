import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <Button
        handleClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type='round'
      >
        -
      </Button>
      <p className='text-sm font-medium'>{currentQuantity}</p>
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
  currentQuantity: PropTypes.number,
};

export default UpdateItemQuantity;
