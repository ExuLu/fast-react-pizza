import { getOrder } from '../../services/apiRestaurant';

export const loader = async ({ id }) => {
  const order = await getOrder(id);
  return order;
};
