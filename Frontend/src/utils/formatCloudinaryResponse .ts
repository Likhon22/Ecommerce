
const formatCloudinaryResponse = (
  images: { secure_url: string; public_id: string }[]
) => {
  const formattedImages = images.map((img) => ({
    cloudinaryUrl: img.secure_url,
    cloudinaryId: img.public_id,
  }));
  return formattedImages;
};

export default formatCloudinaryResponse;
