import { Router } from "express";

import { authenticate } from "../middleware/auth";
import { isSuperadmin } from "../middleware/role";
import {
  createCustomer,
  createSuperadmin,
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  updateUser,
} from "../controllers/users";

const router = Router();

router.post("/create", createCustomer);
router.post("/login", loginUser);
router.post("/superadmin", createSuperadmin);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
