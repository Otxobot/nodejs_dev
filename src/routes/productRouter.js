import { Router } from "express";

const router = Router()

//Conseguir todos los products
router.get("/", (req, res)=> {
    res.send("Conseguir todos los products");
});

//Conseguir producto por id
router.get("/:id", (req, res)=> {
    const id = req.params.id;
    res.send("Conseguir el producto")
});

//crear un producto
router.post("/", (req, res) =>{
    res.send("creamos un producto");
});

//modificar un producto
router.post("/:id", (req, res) =>{
    const id = req.params.id;
    const datos = req.body; //los datos para modificar el producto
    res.send("Modificamos el producto", id);
});

//para eliminar un producto
router.post("/:id/delete", (req, res) =>{
    const id = req.params.id;
    res.send("Borramos el producto", id);
});

export default router;