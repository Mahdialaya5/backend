const express = require('express');
const router = express.Router();
const controlles=require("../controlles/productcontrolles")
const upload=require("../utils/multer")

router.get('/',controlles.GetProducts)
router.get("/:id",controlles.GetOneProduct)

router.post("/",upload("products").single("file"),controlles.AddProduct)

router.patch("/:id",upload("products").single("file"),controlles.UpdateProduct)

router.delete("/:id",controlles.DeleteProduct)


module.exports = router;