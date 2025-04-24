import { Loader } from "lucide-react";

const Spinner = () => {
  return (
    <div>
      <div className="bg-black/60 h-screen backdrop:blur-md fixed inset-0 z-[999] flex justify-center items-center">
        <Loader className="animate-spin" />
      </div>
    </div>
  );
};

export default Spinner;
