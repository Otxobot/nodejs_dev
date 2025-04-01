import { Router } from "express";
import standRouter from './standRouter.js'

const router = Router();

router.get("/", (req, res)=>{
    res.send("hello world");
})

router.use("/stand", standRouter);

export default router