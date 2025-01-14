const express = require("express");
const router = express.Router();
const uploader = require("../../middlewares/uploader");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchPost,
  getPetById,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  try {
    const foundPost = fetchPost(postId);
    if (!foundPost) return next({ status: 404, message: "post not found" });
    req.post = foundPost;
  } catch (error) {
    return next(error);
  }
});

router.get("/", postsGet);
router.post("/", postsCreate);

router.post("/", uploader.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);
router.get("/:postId", getPetById);

module.exports = router;
