const Post = require("../../models/Post");

exports.fetchPost = async (postId) => {
  const foundPost = await Post.findById(postId);
  return foundPost;
};

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(201).json(newPost);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  try {
    await req.post.deleteOne();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }

  // const { postId } = req.params;
  // try {
  //   const foundPost = await Post.findById(postId);
  //   if (foundPost) {
  //     await foundPost.deleteOne();
  //     res.status(204).end();
  //   } else {
  //     res.status(404).json({ message: "post not found" });
  //   }
  // } catch (error) {
  //   return next(error);
  // }
};

exports.postsUpdate = async (req, res, next) => {
  try {
    await req.post.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
  // const { postId } = req.params;
  // try {
  //   const foundPost = await Post.findById(postId);
  //   if (foundPost) {
  //     await foundPost.updateOne(req.body);
  //     res.status(204).end();
  //   } else {
  //     res.status(404).json({ message: "post not found" });
  //   }
  // } catch (error) {
  //   return next(error);
  // }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    // res.status(500).json({ message: error.message });

    return next(error);
  }
};

exports.getPetById = (req, res, next) => {
  try {
    return res.status(200).json(req.body);
  } catch (error) {
    return next(error);
  }
};
