import PropTypes from 'prop-types';

import Button from '../../UI/Button.jsx';

import { formatCurrency } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice.js';

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const { pizzaId, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const handleClick = () => {
    if (soldOut) return;

    const newItem = { pizzaId, name, unitPrice, quantity: 1 };
    dispatch(addItem(newItem));
  };

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'grayscale-70 opacity-70' : ''}`}
      />
      <div className='flex flex-grow flex-col pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic text-stone-500'>
          {ingredients.join(', ')}
        </p>

        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm font-medium uppercase text-stone-500'>
              Sold out
            </p>
          )}

          <Button handleClick={handleClick} type='small'>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    pizzaId: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    soldOut: PropTypes.bool,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default MenuItem;
