import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

type ESortProps = {
  setHandleSort: (value: string) => void;
  placeholder: string;
  label: string;
  items: { value: string; label: string }[];
};
const ESort = ({ setHandleSort, placeholder, label, items }: ESortProps) => {
  return (
    <Select onValueChange={setHandleSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem value={item.value}> {item.label} </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ESort;
