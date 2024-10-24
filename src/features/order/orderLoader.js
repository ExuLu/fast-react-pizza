import { getOrder } from '../../services/apiRestaurant';

export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};
