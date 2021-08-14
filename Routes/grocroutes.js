import express, { Router } from 'express'
import { addgrocery,getall,groceryupdatebyid,deletebyid } from '../Controller/groceercon.js'

const router = express.Router();

    router.post("/add",addgrocery);
    router.get("/getall",getall);
    router.put("/updatePurchaseStatus",groceryupdatebyid);
    router.delete("/deleteGroceryItem",deletebyid)


export default router