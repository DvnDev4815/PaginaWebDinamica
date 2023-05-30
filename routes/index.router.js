const Pool = require("../helpers/db");

const router = require("express").Router(),
    db = require("../helpers/db")

router.get("/", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM Alumnos")
    res.render("index", { data: rows })
})

router.get("/usuario/editarForm/:id", async (req, res) => {
    const { id } = req.params;
    const [result] = await Pool.query("SELECT * FROM Alumnos WHERE ID = ?", [id])
    
    res.render("editform", { data: result[0] })
})

router.get("/usuario/agregarForm", async (req, res) => {
    res.render("agreForm")
})

router.post("/usuario/agregar/", async (req, res) => {
    const NewUser= req.body
    const [rows] = await db.query("SELECT * FROM Alumnos")
    
    for(i in rows){
        if(NewUser.ID == rows[i].ID || NewUser.ID === "" || NewUser.Nombre === "" || NewUser.Email === "" || NewUser.codCurso === "" ){
            res.redirect("/usuario/agregarForm")
        }
        else{
            await Pool.query("INSERT INTO Alumnos set ?", [NewUser])
            res.redirect("/")
        }
    }
})

router.post("/usuario/editar/:id", async (req, res) => {
    const { id } = req.params;
    await Pool.query("UPDATE Alumnos set ? WHERE ID= ?", [req.body, id])

    res.redirect("/")
})

router.delete("/usuario/delete/:id", async (req, res) => {
    const UserID = req.params.id, 
        result = await Pool.query(`DELETE FROM Alumnos WHERE ID= ${UserID}`)
 
    res.redirect("/")
})

module.exports= router