const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) =>
  res.render("index", { title: "Home", message: "Welcome to the Home page" }),
);
app.get("/about", (req, res) =>
  res.render("index", { title: "About", message: "This is the About page" }),
);
app.get("/contact", (req, res) =>
  res.render("index", {
    title: "Contact",
    message: "This is the Contact page",
  }),
);
app.get("/hello/:name", (req, res) =>
  res.render("index", {
    title: "Greeting",
    message: `Hello, ${req.params.name}!`,
  }),
);
app.post("/submit", (req, res) =>
  res.render("index", {
    title: "Form result",
    message: `You submitted: ${req.body.message || "(empty)"}`,
  }),
);
app.listen(3000, () => console.log("Open http://localhost:3000"));
