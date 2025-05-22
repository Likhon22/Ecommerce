/* eslint-disable @typescript-eslint/no-explicit-any */

import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import ProductTable from "@/components/table/ProductTable";
import EButton from "@/components/ui/EButton";
import Spinner from "@/components/ui/Spinner";
import { shippingFee } from "@/constants/product";
import { selectedUser } from "@/features/redux/features/auth/authSlice";
import { useGetCartQuery } from "@/features/redux/features/cart/cartApi";
import { useAppSelector } from "@/features/redux/hook";

import { ArrowLeft, ArrowRight, ShoppingBag, ShoppingCart } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [localStorageCartItem, setLocalStorageCartItem] = useState<any>([]);

  const user = useAppSelector(selectedUser);

  const { data: cart, isLoading } = useGetCartQuery(user?.email as string, {
    skip: !user?.email,
  });

  useEffect(() => {
    if (!user?.email) {
      const localCartItem = localStorage.getItem("cartItem");
      if (localCartItem) {
        const parsedCartItem = JSON.parse(localCartItem);
        if (parsedCartItem.expiresAt < Date.now()) {
          localStorage.removeItem("cartItem");
        } else {
          setLocalStorageCartItem(parsedCartItem.items);
        }
      }
    }
  }, [user]);

  const cartItems = user?.email ? cart?.data?.items : localStorageCartItem;
  const isEmpty = !cartItems?.length && !isLoading;

  // Calculate cart totals
  const cartSummary = useMemo(() => {
    if (!cartItems?.length) return { subtotal: 0, shipping: 0, total: 0 };

    const subtotal = cartItems.reduce((sum: number, item: any) => {
      return item.discountPrice > 0
        ? sum + item.discountPrice * item.quantity
        : sum + item.price * item.quantity;
    }, 0);

    const shipping = subtotal > 0 ? shippingFee : 0;
    const total = subtotal + shipping;

    return { subtotal, shipping, total };
  }, [cartItems]);

  if (isEmpty) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <ShoppingCart size={40} className="text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <EButton className="w-full">
              <ShoppingBag size={18} className="mr-2" />
              Browse Products
            </EButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
      )}
      <Container>
        <HeadingSection
          className="mb-8 text-center"
          firstText="SHOPPING CART"
          secondText="REVIEW & CHECKOUT"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            {user?.email ? (
              <ProductTable
                caption="Your Selected Items"
                items={cart?.data?.items}
                tableHead={[
                  { header: "Product Name", field: "productName" },
                  { header: "Image", field: "productImage" },
                  { header: "Quantity", field: "quantity" },
                  { header: "Size", field: "size" },
                  { header: "Color", field: "color" },
                  { header: "Price", field: "price" },
                  { header: "Delete", field: "delete" },
                ]}
              />
            ) : (
              <ProductTable
                caption="Your Selected Items"
                items={localStorageCartItem}
                tableHead={[
                  { header: "Product Name", field: "productName" },
                  { header: "Image", field: "productImage" },
                  { header: "Quantity", field: "quantity" },
                  { header: "Size", field: "size" },
                  { header: "Color", field: "color" },
                  { header: "Price", field: "price" },
                  { header: "Delete", field: "delete" },
                ]}
              />
            )}
          </div>

          {/* Cart Summary Section */}
          <div className="h-fit bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">
                  Subtotal
                </span>
                <span className="font-medium">
                  ${cartSummary.subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">
                  Shipping
                </span>
                <span className="font-medium">
                  ${cartSummary.shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${cartSummary.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/checkout" className="block w-full">
                <EButton
                  className="w-full justify-center"
                  disabled={
                    (user?.email &&
                      (!cart?.data?.items || cart?.data?.items.length === 0)) ||
                    (!user?.email &&
                      (!localStorageCartItem ||
                        localStorageCartItem.length === 0))
                  }
                >
                  Proceed to Checkout
                  <ArrowRight size={16} className="ml-2" />
                </EButton>
              </Link>
              <Link to="/collection" className="block w-full">
                <EButton variant="outline" className="w-full justify-center">
                  <ArrowLeft size={16} className="mr-2" />
                  Continue Shopping
                </EButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
