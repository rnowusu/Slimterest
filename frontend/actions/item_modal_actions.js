export const OPEN_ITEM_MODAL = 'OPEN_ITEM_MODAL';
export const CLOSE_ITEM_MODAL = 'CLOSE_ITEM_MODAL';

export const openItemModal = (itemModal) => {
  return {
    type: OPEN_ITEM_MODAL,
    itemModal: itemModal
  };
};

export const closeItemModal = () => {
  return {
    type: CLOSE_ITEM_MODAL
  };
};
