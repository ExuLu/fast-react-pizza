import PropTypes from 'prop-types';

import Button from '../../UI/Button.jsx';

import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice.js';
import DeleteButton from '../cart/DeleteButton.jsx';
import UpdateItemQuantity from '../cart/UpdateItemQuantity.jsx';

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const handleClick = () => {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  const isInCart = currentQuantity > 0;

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale-70' : ''}`}
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

          {!soldOut && !isInCart && (
            <Button handleClick={handleClick} type='small'>
              Add to cart
            </Button>
          )}
          {isInCart && (
            <div className='flex gap-1 md:gap-3'>
              <UpdateItemQuantity pizzaId={id} />
              <DeleteButton pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    soldOut: PropTypes.bool,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default MenuItem;
