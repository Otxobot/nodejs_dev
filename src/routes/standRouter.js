import { Router } from "express";
import standController from '../controllers/standController.js'

const router = Router()

//Conseguir todos los stands
router.get("/", standController.getAll);

//Conseguir stand por id
router.get("/:id", standController.getById);

//crear un stand
router.post("/", standController.create);

//modificar un stand
router.post("/:id", standController.edit);

//para eliminar un stand
router.post("/:id/delete", standController.remove);

export default router;