import EmptyView from "@/components/shared/emptyView/EmptyView";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <EmptyView
      icon={<ShoppingBag className="w-16 h-16" />}
      heading="Your cart is empty"
      description="Looks like you haven't added any items to your cart yet."
      button="Start Shopping"
      link="/collection"
    />
  );
};

export default Cart;
