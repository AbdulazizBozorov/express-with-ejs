const { default: axios } = require("axios");
const { createViewPath } = require("../helpers/create_view_path");



const getJobs =  (req, res) => {
    const jobs = [
      "Full stack developer",
      "Backend Developer",
      "NodeJs engineer",
      "Flutter developer",
    ];
    res.render(createViewPath("jobs"), {
      title: "Jobs",
      jobs,
      page_name: "jobs",
    });
  }

module.exports = {
    getJobs
}

