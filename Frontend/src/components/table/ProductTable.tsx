import { TCartProduct } from "@/types/cart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import EButton from "../ui/EButton";
import { TrashIcon } from "lucide-react";
import { useAppSelector } from "@/features/redux/hook";
import { selectedUser } from "@/features/redux/features/auth/authSlice";
import { useDeleteCartMutation } from "@/features/redux/features/cart/cartApi";
import Spinner from "../ui/Spinner";

type HeaderMapItems = {
  header: string;
  field: string;
};
type ProductTableProps = {
  caption?: string;
  items: TCartProduct[] | undefined;
  tableHead: HeaderMapItems[];
  footer?: boolean;
};
const ProductTable = ({
  caption,
  items,
  tableHead,
  footer = false,
}: ProductTableProps) => {
  const totalPrice = items?.reduce((acc, item) => acc + item.price, 0);
  const user = useAppSelector(selectedUser);
  const [deleteCart, { isLoading }] = useDeleteCartMutation();
  const handleDelete = (payload: TCartProduct) => {
    if (!user) {
      const cartItem = localStorage.getItem("cartItem");
      if (!cartItem) {
        return;
      }
      const parsedCartItem = JSON.parse(cartItem);
      const updatedCartItem = parsedCartItem.items.filter(
        (item) => item.productId !== payload.productId
      );
      localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
      window.location.reload();
    }
    if (user) {
      const cartItem = {
        productId: payload.productId,
        color: payload.color,
        size: payload.size,
      };
      deleteCart({ email: user.email, payload: cartItem }).unwrap();
    }
  };
  return (
    <div>
      {isLoading && <Spinner />}
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHead?.map((header, index) => (
              <TableHead key={index} className="text-left capitalize">
                {header.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items?.map((item, index) => (
            <TableRow key={index}>
              {tableHead?.map((header, headerIndex) => {
                const field = item[header.field as keyof typeof item];
                console.log(field);

                return (
                  <TableCell key={headerIndex} className="text-left">
                    {header.header === "Delete" ? (
                      <EButton
                        onClick={() => handleDelete(item)}
                        className="bg-red-500 hover:bg-red-600   hover:scale-110 duration-500 text-white p-2 rounded-md"
                      >
                        <TrashIcon />
                      </EButton>
                    ) : (
                      <div>
                        {header.field === "color" &&
                        field &&
                        typeof field === "object" ? (
                          <div className="flex items-center gap-2">
                            <div
                              className="w-4 h-4 rounded-full border-black border"
                              style={{ backgroundColor: field.hex }}
                            ></div>
                            <span>{field.name}</span>
                          </div>
                        ) : header.field === "productImage" ? (
                          <img
                            src={String(field)}
                            alt={item.productName}
                            className="w-16 h-16 object-cover"
                          />
                        ) : (
                          <div>
                            {header.field === "price" &&
                            field &&
                            typeof field === "number" ? (
                              <div>
                                {item.discountPrice ? (
                                  <div>
                                    <span className="line-through text-gray-500">
                                      ${field}
                                    </span>
                                    <span className="text-black font-medium ml-2">
                                      ${item.discountPrice}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="font-medium text-black">
                                    ${field}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span>{String(field)}</span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
        {footer && (
          <TableFooter className="bg-gray-100">
            <TableRow>
              <TableCell colSpan={tableHead.length - 1}>Total</TableCell>
              <TableCell className="text-left"> ${totalPrice}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
};

export default ProductTable;
