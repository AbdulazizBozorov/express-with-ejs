const { default: axios } = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const getUsers = async (req, res) => {
  try {
    const users = await (
      await axios.get("https://jsonplaceholder.typicode.com/users")
    ).data;

    res.render(createViewPath("users"), {
      title: "Users",
      users,
      page_name: "users",
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserID = async (req, res) => {
    try {
      const usersData = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/users/${req.params.id}`,
      });
      const user = usersData.data;
      res.render(createViewPath("user"), {
        title: user.username,
        user,
        page_name: "users",
      });
    } catch (error) {
      console.log(error);
    }
}
const getAddUser =  (req, res) => {
    res.render(createViewPath("add-user"), {
      title: "New User",
      page_name: "users",
    });
}
const getDeleteUser =  async (req, res) => {
    console.log("Succesfully deleted");
    res.render(createViewPath("delete-user"), {
      title: "Delete",
      page_name: "This page",
    });
  }
const postAddUser = async (req, res) => {
    const { name, username, email, phone, id } = req.body;
    try {
      const userData = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          username,
          email,
          phone,
        }
      );
      const user = await userData.data;
      return res.render(createViewPath("user"), {
        title: "Users",
        user,
        id,
        page_name: "users",
      });
    } catch (error) {
      console.log(error);
    }
  }

const getEditID =  async (req, res) => {
    try {
      const userData = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/users/${req.params.id}`,
      });
      const user = userData.data;
      res.render(createViewPath("edit-user"), {
        title: user.username,
        user,
        page_name: "users",
      });
    } catch (error) {
      console.log(error);
    }
  }
const putEditID = async (req, res) => {
    const { name, username, email, phone } = req.body;
    const { id } = req.params;
    try {
      const userData = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          name,
          username,
          email,
          phone,
        }
      );
      const user = userData.data;
      res.render(createViewPath("user"), {
        title: "Foydalanuvchilar",
        user,
        page_name: "users",
      });
    } catch (error) {
      console.log(error);
    }
  }
const deleteUserID =  async (req, res) => {
    const { id } = req.params;
    try {
      const userData = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = userData.data;
      console.log(user);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  }
  
module.exports = {
  getUsers,
  getUserID,
  getAddUser,
  getDeleteUser,
  postAddUser,
  getEditID,
  putEditID,
  deleteUserID,
};
