import { Search } from "lucide-react";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ESearchProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  style?: string;
};

const ESearch = ({ style, placeholder, ...props }: ESearchProps) => {
  return (
    <div
      className={cn(
        `flex relative w-3/5 h-[40px]  justify-center items-center mx-auto`,
        style
      )}
    >
      <Input {...props} className="h-full" placeholder={placeholder} />
      <Search className="absolute  right-1" />
    </div>
  );
};

export default ESearch;
