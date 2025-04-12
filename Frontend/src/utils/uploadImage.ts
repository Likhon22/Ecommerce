import { config } from "@/config";
import axios from "axios";
const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", config.cloudinary.uploadPreset as string);
  formData.append("cloud_name", config.cloudinary.cloudName as string);
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${config.cloudinary.cloudName}/image/upload`,
      formData
    );
    const { secure_url, public_id } = response.data;
    return { secure_url, public_id };
  } catch (error) {
    console.log("Error uploading image:", error);
  }
};
export const uploadImages = async (files: File[]) => {
  const uploadPromises = files.map((file) => uploadImage(file));
  const results = await Promise.all(uploadPromises);
  return results;
};
export default uploadImage;
