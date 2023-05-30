const express= require("express"),
    app = express(),
    data= require("./helpers/db"),
    hbs= require("express-handlebars"),
    methodOverride= require("method-override"),
    path= require("path"),
    port= process.env.NODE_ENV === "production" ? (process.env.PORT || 80) : 4000;

// Configs
app.set("views", path.join(__dirname, "views"))
app.engine(".hbs", hbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}))

app.set("view engine", ".hbs");

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))

// Routes
app.use(require("./routes/index.router"))

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    console.log(`Server corriendo en ${port}`);
})