var express = require("express")
    , app = express()

app.set("view engine", "ejs")
    .set("views", "views")
    .set("port", process.env.PORT || 4000)

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.render("homepage")
})

app.listen(app.get("port"), console.log("Server is ready!"))