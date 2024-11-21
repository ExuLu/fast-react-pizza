import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartOverview = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce(
    (sum, curItem) => sum + curItem.unitPrice * curItem.quantity,
    0,
  );

  return (
    <div className='flex flex-row items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 sm:px-6'>
      <p className='space-x-4 text-sm font-semibold uppercase text-stone-300 sm:space-x-6 md:text-base'>
        <span>{cart.length} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
