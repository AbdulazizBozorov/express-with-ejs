const express = require('express');
const { getPosts, getPostID, getAddPost, postAddPost, getEditPostID, putEditPostID, deletePostID, getDeletePost } = require('../controllers/posts');
const router = express.Router();


router.get("/posts", getPosts);

router.get("/user/:id", getPostID);
router.get("/add-user", getAddPost);

router.get("/delete-user", getDeletePost);

router.post("/add-user", postAddPost);

router.get("/edit/:id", getEditPostID);

router.put("/edit/:id", putEditPostID);
router.delete("/user/:id",deletePostID);

module.exports = router