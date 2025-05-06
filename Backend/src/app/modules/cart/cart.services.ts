import { z } from 'zod';
import ApiError from '../../error/ApiError';
import User from '../auth/auth.model';
import Product from '../product/product.model';

import Cart from './cart.model';
import cartValidations from './cart.validation';
import { TCartProduct } from './cart.interface';

const createCartIntoDB = async (
  payload: z.infer<typeof cartValidations.cartProductValidationSchema>['body'],
) => {
  const isUserExists = await User.findOne({ email: payload.email });
  if (!isUserExists) {
    throw new ApiError(400, 'User already exists');
  }

  const isProductExists = await Product.findOne({ _id: payload.productId });
  if (!isProductExists) {
    throw new ApiError(400, 'Product not found');
  }
  let cart = await Cart.findOne({ email: payload.email });
  const newItem = {
    productId: isProductExists._id,
    productName: isProductExists.name,
    productImage: isProductExists.images[0].cloudinaryUrl,
    productDescription: isProductExists.description,
    quantity: payload.quantity,
    size: payload.size,
    color: payload.color,
    price: isProductExists.price,
    discountPrice: isProductExists.discountPrice,
    finalPrice:
      isProductExists.discountPrice && isProductExists.discountPrice > 0
        ? isProductExists.discountPrice
        : isProductExists.price,
  };
  if (!cart) {
    cart = await Cart.create({
      email: payload.email,
      items: [newItem],
    });
  } else {
    const existingItems = cart.items.find(
      item =>
        item.productId.equals(payload.productId) &&
        item.size === payload.size &&
        item.color.hex === payload.color.hex,
    );
    if (existingItems) {
      existingItems.quantity += payload.quantity;
    } else {
      cart.items.push(newItem);
    }
    await cart.save();
  }

  return cart;
};
const getCartFromDB = async (email: string) => {
  const cart = await Cart.findOne({ email });
  console.log(cart);

  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }
  return cart;
};

const deleteCartFromDB = async (
  email: string,
  payload: Pick<TCartProduct, 'productId' | 'color' | 'size'>,
) => {
  const cart = await Cart.findOne({ email });

  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }
  const newCart = await Cart.updateOne(
    { email },
    {
      $pull: {
        items: {
          productId: payload.productId,
          size: payload.size,
          'color.hex': payload.color.hex,
        },
      },
    },
  );

  return newCart;
};
const cartServices = {
  createCartIntoDB,
  getCartFromDB,
  deleteCartFromDB,
};

export default cartServices;
