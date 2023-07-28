export const sortingFoo = (
  items,
  sortByIdInc,
  sortByTitleInc,
  sortByBodyInc,
  sortByIdDec,
  sortByTitleDec,
  sortByBodyDec
) => {
  if (
    sortByIdInc ||
    sortByTitleInc ||
    sortByBodyInc ||
    sortByIdDec ||
    sortByTitleDec ||
    sortByBodyDec
  ) {
    const sortItems = [...items];
    return sortItems.sort((a, b) => {
      if (sortByIdInc) {
        return a.id - b.id;
      }
      if (sortByTitleInc) {
        if (a.title > b.title) return 1;
      }
      if (sortByBodyInc) {
        if (a.body > b.body) return 1;
      }
      if (sortByIdDec) {
        return b.id - a.id;
      }
      if (sortByTitleDec) {
        if (a.title < b.title) return -1;
      }
      if (sortByBodyDec) {
        if (a.body < b.body) return -1;
      }
    });
  }
  return items;
};
