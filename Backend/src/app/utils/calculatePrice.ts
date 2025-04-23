const calculatePrice = (price: number, discount: number): number | null => {
  if (discount > 0) {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
  }
  return null;
};

export default calculatePrice;
