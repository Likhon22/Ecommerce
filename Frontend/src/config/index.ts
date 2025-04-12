import "dotenv/config";
const { CLOUD_NAME, UPLOAD_PRESET } = process.env;

export const config = {
  cloudinary: {
    cloudName: CLOUD_NAME,
    uploadPreset: UPLOAD_PRESET,
  },
};
