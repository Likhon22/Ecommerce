import InlineSpinner from "@/components/ui/InlineSpinner";

import { ReactNode, Suspense } from "react";

type LazyLoaderProps = {
  children: ReactNode;
  fallback?: ReactNode;
};
const LazyLoader = ({ children, fallback }: LazyLoaderProps) => {
  return (
    <Suspense fallback={fallback ?? <InlineSpinner />}>{children}</Suspense>
  );
};

export default LazyLoader;
