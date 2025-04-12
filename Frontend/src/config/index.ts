export const config = {
  cloudinary: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
    uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
  },
};
