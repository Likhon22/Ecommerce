import { assets } from "@/assets/frontend_assets/assets";
import Container from "@/components/shared/layout/container/Container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center border-[1px]  md:border-primary">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <p className="w-8 bg-primary h-[1.2px]"></p>
            <p className="font-medium text-primary text-sm md:text-base">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl text-primary font-medium leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex justify-center items-center gap-2">
            <p className="font-semibold text-primary text-sm md:text-base">
              Shop Now
            </p>
            <p className="w-8 bg-primary h-[1.2px]"></p>
          </div>
        </div>
        <div className="flex-1">
          <img src={assets.hero_img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
