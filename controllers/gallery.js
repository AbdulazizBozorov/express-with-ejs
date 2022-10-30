const { default: axios } = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const getGallery =  (req, res) => {
    const ph = ["pd.jpg", "billgat.jpg", "Elo.jpg", "mz.jpg"];
    res.render(createViewPath("gallery"), {
      title: "Gallery",
      ph,
      page_name: "gallery",
    });
  }

module.exports = {
    getGallery,
}