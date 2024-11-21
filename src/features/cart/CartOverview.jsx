import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

const CartOverview = () => {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <div className='flex flex-row items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 sm:px-6'>
      <p className='space-x-4 text-sm font-semibold uppercase text-stone-300 sm:space-x-6 md:text-base'>
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
