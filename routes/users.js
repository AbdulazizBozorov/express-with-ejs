const express = require('express');
const { getUsers, getUserID, getAddUser, getDeleteUser, postAddUser, getEditID, putEditID, deleteUserID } = require('../controllers/users');

const router = express.Router();


router.get("/users", getUsers);

router.get("/user/:id", getUserID);
router.get("/add-user", getAddUser);

router.get("/delete-user", getDeleteUser);

router.post("/add-user", postAddUser);

router.get("/edit/:id", getEditID);
// app.get("/edit-user/:id", async (req, res) => {
//   const id = req.params.id;
//   const userData = await axios.get(
//     "http://jsonplaceholder.typicode.com/users/" + id
//   );
//   const user = await userData.data;
//   res.render(createViewPath("edit-user"), {
//     title: "o'zgartirish",
//     user,
//     page_name: "errore",
//   });
// });
router.put("/edit/:id", putEditID);
router.delete("/user/:id",deleteUserID);

module.exports = router