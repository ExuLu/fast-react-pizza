import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/helpers';
import Button from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button handleClick={handleDelete} type='small'>
          Delete
        </Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

export default CartItem;
