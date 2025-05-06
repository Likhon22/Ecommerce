/* eslint-disable @typescript-eslint/no-explicit-any */
import EmptyView from "@/components/shared/emptyView/EmptyView";
import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import ProductTable from "@/components/table/ProductTable";
import Spinner from "@/components/ui/Spinner";
import { selectedUser } from "@/features/redux/features/auth/authSlice";
import { useGetCartQuery } from "@/features/redux/features/cart/cartApi";
import { useAppSelector } from "@/features/redux/hook";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const Cart = () => {
  const [localStorageCartItem, setLocalStorageCartItem] = useState<any>([]);

  const user = useAppSelector(selectedUser);
  const { data: cart, isLoading } = useGetCartQuery(user?.email as string, {
    skip: !user?.email,
  });
  console.log(cart);

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
  console.log(localStorageCartItem);

  if (
    !cart?.data?.items?.length &&
    !localStorageCartItem?.length &&
    !isLoading
  ) {
    return (
      <EmptyView
        heading="Your cart is empty"
        description="Looks like you have not added anything to your cart yet"
        icon={<ShoppingBag />}
      />
    );
  }
  return (
    <div className="min-h-screen my-12">
      {isLoading && <Spinner />}
      <Container>
        <div>
          <HeadingSection
            className="mb-8"
            firstText="YOUR CART"
            secondText="CHECKOUT"
          />
        </div>

        {user?.email ? (
          <ProductTable
            caption="Recent Orders"
            items={cart?.data?.items}
            tableHead={[
              { header: "Product Name", field: "productName" },
              { header: "Image", field: "productImage" },
              { header: "Quantity", field: "quantity" },
              { header: "Size", field: "size" },
              { header: "Color", field: "color" },
              { header: "Price", field: "price" },
            ]}
          />
        ) : (
          <ProductTable
            caption="Recent Orders"
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
      </Container>
    </div>
  );
};

export default Cart;
