import { Search } from "lucide-react";
import { Input } from "./input";

const ESearch = () => {
  return (
    <div className="flex relative w-3/5  justify-center items-center mx-auto">
      <Input className=" " placeholder="Search your desired product" />
      <Search className="absolute  right-1" />
    </div>
  );
};

export default ESearch;
