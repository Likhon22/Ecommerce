import { ReactNode } from "react";
import { Link } from "react-router-dom";

type emptyViewProps = {
  icon?: ReactNode;
  heading?: string;
  description?: string;
  button?: React.ReactNode;
  link?: string;
};
const EmptyView = ({
  icon,
  heading,
  description,
  button,
  link,
}: emptyViewProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        {icon && <div className="text-gray-400 mb-6">{icon}</div>}
        <h2 className="text-2xl font-playfair text-primary mb-2">
          {heading || "Your cart is empty"}
        </h2>
        <p className="text-secondary mb-8 text-center max-w-md">
          {description ||
            "Looks like you haven't added any items to your cart yet."}
        </p>
        {button && link && (
          <Link
            to={link}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {button}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyView;
