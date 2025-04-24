import { useState } from "react";
import { TProduct } from "@/types/products";

type ProductImagesProps = {
  product: TProduct;
  selectedColor?: string;
};

const ProductImages = ({ product, selectedColor }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState<string>(
    product?.images[0]?.cloudinaryUrl || ""
  );

  // Get images based on selected color or default product images
  const getImages = () => {
    if (selectedColor) {
      const colorImages = product?.colors?.find(
        (color) => color.hex === selectedColor
      )?.images;

      if (colorImages && colorImages.length > 0) {
        return colorImages;
      }
    }
    return product?.images || [];
  };

  const images = getImages();

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Main image */}
      <div className="flex-1">
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-20 h-20 cursor-pointer border-2 ${
              mainImage === image.cloudinaryUrl
                ? "border-black"
                : "border-gray-200"
            }`}
            onClick={() => setMainImage(image.cloudinaryUrl)}
          >
            <img
              src={image.cloudinaryUrl}
              alt={`${product.name} - ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
