/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  CreditCard,
  MapPin,
  ShoppingBag,
} from "lucide-react";

import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import EForm from "@/components/form/EForm";
import EInput from "@/components/ui/EInput";
import ESelect from "@/components/ui/ESelect";
import EButton from "@/components/ui/EButton";
import Spinner from "@/components/ui/Spinner";
import { shippingFee } from "@/constants/product";

import { selectedUser } from "@/features/redux/features/auth/authSlice";
import { useGetCartQuery } from "@/features/redux/features/cart/cartApi";
import { useAppSelector } from "@/features/redux/hook";
import EmptyView from "@/components/shared/emptyView/EmptyView";

const checkoutSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  country: z.string().min(2, "Please select a country"),
  cardName: z.string().min(3, "Name on card must be at least 3 characters"),
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits")
    .max(19),
  expiryMonth: z.string().min(1, "Please select expiry month"),
  expiryYear: z.string().min(4, "Please select expiry year"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4),
});

const countryOptions = [
  "united states",
  "canada",
  "united kingdom",
  "australia",
  "germany",
  "france",
  "japan",
  "india",
  "china",
  "brazil",
];

const monthOptions = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const yearOptions = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"];

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "shipping" | "payment" | "review"
  >("shipping");
  const navigate = useNavigate();
  const user = useAppSelector(selectedUser);

  const { data: cart, isLoading } = useGetCartQuery(user?.email as string, {
    skip: !user?.email,
  });

  // Get cart items from local storage if user is not logged in
  const localStorageCartItem = useMemo(() => {
    if (user?.email) return [];

    const localCartItem = localStorage.getItem("cartItem");
    if (localCartItem) {
      const parsedCartItem = JSON.parse(localCartItem);
      if (parsedCartItem.expiresAt < Date.now()) {
        return [];
      } else {
        return parsedCartItem.items;
      }
    }
    return [];
  }, [user]);

  const cartItems = user?.email ? cart?.data?.items : localStorageCartItem;

  // Calculate order summary
  const orderSummary = useMemo(() => {
    if (!cartItems?.length)
      return { subtotal: 0, shipping: 0, tax: 0, total: 0 };

    const subtotal = cartItems.reduce((sum: number, item: any) => {
      return sum + Number(item.price) * item.quantity;
    }, 0);

    const shipping = subtotal > 0 ? shippingFee : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
  }, [cartItems]);

  const handleCheckoutSubmit = (data: any) => {
    setIsSubmitting(true);

    // Here you would typically send the order to your backend
    console.log("Order data:", {
      ...data,
      items: cartItems,
      total: orderSummary.total,
    });

    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/order-success"); // Redirect to success page
    }, 1500);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <EmptyView
        heading="Your cart is empty"
        description="Add items to your cart to proceed with checkout."
        icon={<ShoppingBag size={48} className="text-gray-400" />}
      />
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
          firstText="SECURE"
          secondText="CHECKOUT"
        />

        {/* Checkout Progress Steps */}
        <div className="mb-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div
                className={`flex flex-col items-center ${
                  activeSection === "shipping"
                    ? "text-primary"
                    : activeSection === "payment" || activeSection === "review"
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2
                  ${
                    activeSection === "shipping"
                      ? "border-primary bg-primary/10"
                      : activeSection === "payment" ||
                        activeSection === "review"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300"
                  }`}
                >
                  {activeSection === "payment" || activeSection === "review" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <span>1</span>
                  )}
                </div>
                <span className="text-xs font-medium">Shipping</span>
              </div>

              <div className="flex-1 h-0.5 mx-4 bg-gray-200">
                <div
                  className="h-full bg-green-600 transition-all duration-300"
                  style={{
                    width:
                      activeSection === "payment" || activeSection === "review"
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>

              <div
                className={`flex flex-col items-center ${
                  activeSection === "payment"
                    ? "text-primary"
                    : activeSection === "review"
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2
                  ${
                    activeSection === "payment"
                      ? "border-primary bg-primary/10"
                      : activeSection === "review"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300"
                  }`}
                >
                  {activeSection === "review" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <span>2</span>
                  )}
                </div>
                <span className="text-xs font-medium">Payment</span>
              </div>

              <div className="flex-1 h-0.5 mx-4 bg-gray-200">
                <div
                  className="h-full bg-green-600 transition-all duration-300"
                  style={{ width: activeSection === "review" ? "100%" : "0%" }}
                />
              </div>

              <div
                className={`flex flex-col items-center ${
                  activeSection === "review" ? "text-primary" : "text-gray-400"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2
                  ${
                    activeSection === "review"
                      ? "border-primary bg-primary/10"
                      : "border-gray-300"
                  }`}
                >
                  <span>3</span>
                </div>
                <span className="text-xs font-medium">Review</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <EForm
                onsubmit={handleCheckoutSubmit}
                resolver={checkoutSchema}
                defaultValues={{
                  fullName: user?.name || "",
                  email: user?.email || "",
                  phone: "",
                  address: "",
                  city: "",
                  state: "",
                  postalCode: "",
                  country: "",
                  cardName: "",
                  cardNumber: "",
                  expiryMonth: "",
                  expiryYear: "",
                  cvv: "",
                }}
                className="space-y-8"
              >
                {/* Conditional rendering based on active section */}
                {activeSection === "shipping" && (
                  <div className="animate-fadeIn">
                    <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-3">
                      <MapPin size={20} className="mr-2 text-primary" />
                      Shipping Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <EInput
                        name="fullName"
                        label="Full Name"
                        placeholder="John Doe"
                        required
                      />
                      <EInput
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                      <EInput
                        name="phone"
                        label="Phone Number"
                        placeholder="(123) 456-7890"
                        required
                      />
                      <div className="md:col-span-2">
                        <EInput
                          name="address"
                          label="Address"
                          placeholder="123 Main Street"
                          required
                        />
                      </div>
                      <EInput
                        name="city"
                        label="City"
                        placeholder="New York"
                        required
                      />
                      <EInput
                        name="state"
                        label="State/Province"
                        placeholder="NY"
                        required
                      />
                      <EInput
                        name="postalCode"
                        label="Postal Code"
                        placeholder="10001"
                        required
                      />
                      <ESelect
                        name="country"
                        label="Country"
                        selectOptions={countryOptions}
                        placeholder="Select country"
                        required
                      />
                    </div>

                    <div className="flex justify-between mt-8">
                      <Link to="/cart">
                        <EButton variant="outline" type="button">
                          <ArrowLeft size={16} className="mr-2" />
                          Back to Cart
                        </EButton>
                      </Link>
                      <EButton
                        type="button"
                        onClick={() => setActiveSection("payment")}
                      >
                        Continue to Payment
                      </EButton>
                    </div>
                  </div>
                )}

                {activeSection === "payment" && (
                  <div className="animate-fadeIn">
                    <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-3">
                      <CreditCard size={20} className="mr-2 text-primary" />
                      Payment Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <EInput
                          name="cardName"
                          label="Name on Card"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <EInput
                          name="cardNumber"
                          label="Card Number"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <ESelect
                            name="expiryMonth"
                            label="Month"
                            selectOptions={monthOptions}
                            placeholder="MM"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <ESelect
                            name="expiryYear"
                            label="Year"
                            selectOptions={yearOptions}
                            placeholder="YYYY"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <EInput
                          name="cvv"
                          label="CVV"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Secure Checkout:</span>{" "}
                        Your payment information is processed securely. We do
                        not store credit card details.
                      </p>
                    </div>

                    <div className="flex justify-between mt-8">
                      <EButton
                        variant="outline"
                        type="button"
                        onClick={() => setActiveSection("shipping")}
                      >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Shipping
                      </EButton>
                      <EButton
                        type="button"
                        onClick={() => setActiveSection("review")}
                      >
                        Review Order
                      </EButton>
                    </div>
                  </div>
                )}

                {activeSection === "review" && (
                  <div className="animate-fadeIn">
                    <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-3">
                      <CheckCircle size={20} className="mr-2 text-primary" />
                      Review Your Order
                    </h2>

                    <div className="space-y-6">
                      {/* Shipping Summary */}
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium flex items-center">
                            <MapPin size={16} className="mr-2" />
                            Shipping Information
                          </h3>
                          <EButton
                            variant="link"
                            className="text-xs p-0 h-auto"
                            onClick={() => setActiveSection("shipping")}
                          >
                            Edit
                          </EButton>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {user?.name || "Your shipping details"}
                        </p>
                      </div>

                      {/* Payment Summary */}
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium flex items-center">
                            <CreditCard size={16} className="mr-2" />
                            Payment Method
                          </h3>
                          <EButton
                            variant="link"
                            className="text-xs p-0 h-auto"
                            onClick={() => setActiveSection("payment")}
                          >
                            Edit
                          </EButton>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Credit Card (•••• •••• •••• XXXX)
                        </p>
                      </div>

                      {/* Terms and Additional Options */}
                      <div className="space-y-3 mt-6">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">
                            Save this information for next time
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">
                            I agree to the{" "}
                            <Link
                              to="/terms"
                              className="text-primary hover:underline"
                            >
                              Terms and Conditions
                            </Link>
                          </span>
                        </label>
                      </div>

                      <div className="flex justify-between mt-8">
                        <EButton
                          variant="outline"
                          type="button"
                          onClick={() => setActiveSection("payment")}
                        >
                          <ArrowLeft size={16} className="mr-2" />
                          Back to Payment
                        </EButton>
                        <EButton type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Spinner size="sm" className="mr-2" />
                              Processing...
                            </>
                          ) : (
                            "Complete Order"
                          )}
                        </EButton>
                      </div>
                    </div>
                  </div>
                )}
              </EForm>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              {/* Items Summary */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {cartItems?.length} ITEMS IN YOUR CART
                </h3>
                <div className="max-h-60 overflow-y-auto pr-2 space-y-4">
                  {cartItems?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex gap-3 pb-3 border-b dark:border-gray-700"
                    >
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                        <img
                          src={item.productImage}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {item.productName}
                        </p>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {item.size && (
                            <span className="mr-2">Size: {item.size}</span>
                          )}
                          {item.color && <span>Color: {item.color.name}</span>}
                        </div>
                        <div className="flex justify-between mt-1 text-sm">
                          <span>Qty: {item.quantity}</span>
                          <span className="font-medium">
                            $
                            {Number(
                              item.discountPrice > 0
                                ? item.discountPrice
                                : item.price
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">
                    Subtotal
                  </span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">
                    Shipping
                  </span>
                  <span>${orderSummary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span>${orderSummary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                  <EButton variant="outline" size="sm">
                    Apply
                  </EButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
