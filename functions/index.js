const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors");
const { v2: cloudinary } = require("cloudinary");
const { defineString } = require("firebase-functions/params");

// 🌐 CORS setup
const corsHandler = cors({ origin: true });


const CLOUD_NAME = defineString("CLOUDINARY_CLOUD_NAME");
const API_KEY = defineString("CLOUDINARY_API_KEY");
const API_SECRET = defineString("CLOUDINARY_API_SECRET");


// 🔐 Cloudinary config (IMPORTANT)
cloudinary.config({
  cloud_name: CLOUD_NAME.value(),
  api_key: API_KEY.value(),
  api_secret: API_SECRET.value(),
});

// 🚀 DELETE FUNCTION
exports.deleteImage = onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { public_id } = req.body;

      if (!public_id) {
        return res.status(400).json({ error: "No public_id provided" });
      }

      const result = await cloudinary.uploader.destroy(public_id);

      return res.json({
        success: true,
        result,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        error: "Delete failed",
      });
    }
  });
});
