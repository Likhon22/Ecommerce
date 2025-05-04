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
  footer = true,
}: ProductTableProps) => {
  const totalPrice = items?.reduce((acc, item) => acc + item.price, 0);
  const user = useAppSelector(selectedUser);
  const handleDelete = (id: string) => {
   
  };
  return (
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
                      onClick={() => handleDelete(item.productId)}
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
                        <span>{String(field)}</span>
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
  );
};

export default ProductTable;
