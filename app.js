const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const morgan = require("morgan");

const methodOverride = require("method-override");
const { default: axios } = require("axios");
const {createViewPath} = require("./helpers/create_view_path")

const userRouter = require("./routes/users")
const contactRouter = require("./routes/contacts")
const jobsRoute = require("./routes/jobs")
const galleryRoute = require("./routes/gallery")
const postRoute = require("./routes/posts")
dotenv.config();
const PORT = process.env.PORT;

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.set("View engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server ishga tushdi : http:localhost:${PORT}`);
});

app.use(myLogger);

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.static("styles"));
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render(createViewPath("index"), { title: "Home", page_name: "home" });
});

app.use(userRouter)
app.use(contactRouter)
app.use(jobsRoute)
app.use(galleryRoute)
app.use(postRoute)



app.use(express.static("img"));


app.use((req, res) => {
  res
    .status(404)
    .render(createViewPath("error"), { title: "Xatolik!", page_name: "Error" });
});
