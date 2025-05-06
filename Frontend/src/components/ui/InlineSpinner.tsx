import { Loader } from "lucide-react";

const InlineSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12 my-12">
      <Loader className="animate-spin text-primary" size={32} />
    </div>
  );
};

export default InlineSpinner;
