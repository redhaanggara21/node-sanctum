// Import express
import express from "express";

// Import Controller sidemenu
import { 
    getSidemenus,
    getSidemenusById,
    createSidemenus,
    updateSidemenus,
    deleteSidemenus
 } from "../controllers/sidemenu.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua sidemenu
router.get('/sidemenus', getSidemenus);
// Route get siedemenu by id
router.get('/sidemenus/:id', getSidemenusById);
// Route create siedemenu baru
router.post('/sidemenus', createSidemenus);
// Route update siedemenu by id
router.put('/sidemenus/:id', updateSidemenus);
// Route delete siedemenu by id
router.delete('/sidemenus/:id', deleteSidemenus);
 
// export router
export default router;