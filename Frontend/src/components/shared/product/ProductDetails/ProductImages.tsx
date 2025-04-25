import { useEffect, useState } from "react";
import { TProduct } from "@/types/products";

type ProductImagesProps = {
  product: TProduct;
  selectedColor?: string;
};

const ProductImages = ({ product, selectedColor }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState<string>(
    product.images[0]?.cloudinaryUrl || ""
  );
  console.log(mainImage, selectedColor);

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
  useEffect(() => {
    const imgs = getImages();
    if (imgs.length > 0) {
      setMainImage(imgs[0].cloudinaryUrl);
    }
  }, [selectedColor, product]);
  const images = getImages();
  return (
    <div>
      <div>
        <img
          loading="lazy"
          className="w-full h-[400px]"
          src={mainImage}
          alt=""
        />
      </div>
      <div>
        <div className="flex gap-2 mt-2">
          {selectedColor ? (
            <div>
              {images.map((image, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={image.cloudinaryUrl}
                  alt={`Product image ${index + 1}`}
                  className={`w-16 h-16 object-cover cursor-pointer ${
                    mainImage === image.cloudinaryUrl
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setMainImage(image.cloudinaryUrl)}
                />
              ))}
            </div>
          ) : (
            <div className="flex gap-2 mt-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={image.cloudinaryUrl}
                  alt={`Product image ${index + 1}`}
                  className={`w-16 h-16 object-cover cursor-pointer ${
                    mainImage === image.cloudinaryUrl
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setMainImage(image.cloudinaryUrl)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
