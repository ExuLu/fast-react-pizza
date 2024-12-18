import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

const CartOverview = () => {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
    <div className='flex flex-row items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 sm:px-6'>
      <p className='space-x-4 text-sm font-semibold uppercase text-stone-300 sm:space-x-6 md:text-base'>
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
