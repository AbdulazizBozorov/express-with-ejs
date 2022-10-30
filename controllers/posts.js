const { default: axios } = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const getPosts = async (req, res) => {
  try {
    const posts = await (
      await axios.get("https://jsonplaceholder.typicode.com/posts")
    ).data;

    res.render(createViewPath("posts"), {
      title: "Posts",
      posts,
      page_name: "posts",
    });
  } catch (error) {
    console.log(error);
  }
};

const getPostID = async (req, res) => {
    try {
      const postsData = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${req.params.id}`,
      });
      const post = postsData.data;
      res.render(createViewPath("post"), {
        title: post.userId,
        post,
        page_name: "posts",
      });
    } catch (error) {
      console.log(error);
    }
}
const getAddPost =  (req, res) => {
    res.render(createViewPath("add-post"), {
      title: "New User",
      page_name: "posts",
    });
}
const getDeletePost =  async (req, res) => {
    console.log("Succesfully deleted");
    res.render(createViewPath("delete-post"), {
      title: "Delete",
      page_name: "This page",
    });
  }
const postAddPost = async (req, res) => {
    const { userId,title,body,id } = req.body;
    try {
      const userData = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId,
          title,
          body,
          id,
        }
      );
      const post = await userData.data;
      return res.render(createViewPath("post"), {
        title: "Posts",
        post,
        id,
        page_name: "posts",
      });
    } catch (error) {
      console.log(error);
    }
  }

const getEditPostID =  async (req, res) => {
    try {
      const userData = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${req.params.id}`,
      });
      const post = userData.data;
      res.render(createViewPath("edit-post"), {
        title: post.username,
        post,
        page_name: "posts",
      });
    } catch (error) {
      console.log(error);
    }
  }
const putEditPostID = async (req, res) => {
  const { userId,title,body } = req.body; 
  const { id } = req.params;
    try {
      const postData = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          userId,
          title,
          body,
        }
      );
      const post = postData.data;
      res.render(createViewPath("post"), {
        title: "Maqolalar",
        post,
        page_name: "posts",
      });
    } catch (error) {
      console.log(error);
    }
  }
const deletePostID =  async (req, res) => {
    const { id } = req.params;
    try {
      const userData = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const post = userData.data;
      console.log(post);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  }
module.exports = {
  getPosts,
  getPostID,
  getAddPost,
  getDeletePost,
  postAddPost,
  getEditPostID,
  putEditPostID,
  deletePostID,
}