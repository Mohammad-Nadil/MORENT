import toast from "react-hot-toast";

const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await res.json();
  return {
    url: data.secure_url,
    public_id: data.public_id,
  };
};

const deleteImage = async (publicId) => {
  const formData = new FormData();

  formData.append("public_id", publicId);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  );

  try {
    await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/destroy`,
      {
        method: "POST",
        body: new URLSearchParams({
          public_id: publicId,
          api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
        }),
      },
    );
  } catch (error) {
    console.log(error);
    toast.error("Kisu ekta problem hoise ❌");
  }
};

export { uploadImage, deleteImage };
