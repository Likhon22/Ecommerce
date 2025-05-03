import { model, Schema } from 'mongoose';
import { TCart, TCartProduct } from './cart.interface';

const cartProductSchema = new Schema<TCartProduct>({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  productName: { type: String, required: true },
  productImage: { type: String, required: true },
  productDescription: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number, required: false },
  finalPrice: { type: Number, required: true },
  size: { type: String, required: true },
  color: {
    name: { type: String, required: true },
    hex: { type: String, required: true },
  },
});

const cartSchema = new Schema<TCart>(
  {
    email: { type: String, required: true },
    items: [cartProductSchema],
  },
  { timestamps: true },
);

const Cart = model<TCart>('Cart', cartSchema);

export default Cart;
