export function isSaveItem(store, id) {
  return store.find((saved) => saved.id === id);
}
