const addProductToLocalStorage = (product: any) => {
  let cart = {
    items: [],
    expiresAt: Date.now() + 1000 * 60 * 60 * 24,
  };
  const existingCartData = localStorage.getItem("cartItem");
  if (existingCartData) {
    const parsedCartData = JSON.parse(existingCartData);
    if (parsedCartData.expiresAt > Date.now()) {
      cart = parsedCartData;
    } else {
      localStorage.removeItem("cartItem");
    }
  }
  const existingItem = cart.items.find(
    (item) =>
      item.productId === product.productId &&
      item.size === product.size &&
      item.color.hex === product.color.hex
  );
  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.items.push(product);
  }
  localStorage.setItem("cartItem", JSON.stringify(cart));
};

export default addProductToLocalStorage;
