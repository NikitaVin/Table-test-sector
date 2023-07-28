import { IPosts } from '../redux/slices/posts';

export const filtredPaginatedOrders = (
  filtredOrders: IPosts[],
  page: number | undefined,
  limit: number
) => {
  if (filtredOrders.length <= 10) {
    return filtredOrders;
  }
  const indexOfLastOrder = page && page * limit;
  const indexOfFirstOrder = indexOfLastOrder && indexOfLastOrder - limit;
  const currentOrders = filtredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  return currentOrders;
};
