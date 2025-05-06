import Hero from "@/components/Home/Hero/Hero";
import LazyLoader from "@/components/shared/lazyLoader/LazyLoader";
import { lazy } from "react";
const LatestCollection = lazy(
  () => import("@/components/Home/latestCollection/LatestCollection")
);
const CategorySection = lazy(
  () => import("@/components/Home/categorySection/CategorySection")
);

const Home = () => {
  return (
    <div>
      <Hero />
      <LazyLoader>
        <LatestCollection />
      </LazyLoader>
      <LazyLoader>
        <CategorySection />
      </LazyLoader>
    </div>
  );
};

export default Home;
