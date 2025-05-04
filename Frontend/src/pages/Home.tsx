import CategorySection from "@/components/Home/categorySection/CategorySection";
import Hero from "@/components/Home/Hero/Hero";
import LatestCollection from "@/components/Home/latestCollection/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <CategorySection />
    </div>
  );
};

export default Home;
