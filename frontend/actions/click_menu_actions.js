export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const openMenu = (menuType) => {
  return {
    type: OPEN_MENU,
    menuType: menuType
  }
}

export const closeMenu = () => {
  return {
    type: CLOSE_MENU
  }
}
