import React from "react";
import { Link } from "react-router-dom";
import EButton from "@/components/ui/EButton";

interface EmptyViewProps {
  heading: string;
  description: string;
  icon: React.ReactNode;
  actionLink?: string;
  actionText?: string;
}

const EmptyView: React.FC<EmptyViewProps> = ({
  heading,
  description,
  icon,
  actionLink = "/collection",
  actionText = "Browse Products",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            {React.cloneElement(icon as React.ReactElement, {
              size: 40,
              className: "text-primary",
            })}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        {actionLink && (
          <Link to={actionLink}>
            <EButton className="w-full">{actionText}</EButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyView;
