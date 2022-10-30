const { default: axios } = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const getContact =  (req, res) => {
    const contact = [
      { name: "Facebook", link: "https://facebook.com" },
      { name: "Youtube", link: "https://youtube.com" },
      { name: "Instagram", link: "https://instagram.com" },
      { name: "Twitter", link: "https://twitter.com" },
    ];
    res.render(createViewPath("contacts"), {
      title: "Kontakt",
      contact,
      page_name: "contacts",
    });
}

module.exports = {
    getContact
}