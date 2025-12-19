import menu from './db/menu';

// getProductById: 상품 id로 menu 배열에서 해당 상품 객체 반환
export function getProductById(id) {
  return menu.find(item => item.id === id);
}
