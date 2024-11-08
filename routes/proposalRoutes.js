import express from "express";
import {
  getProposalById,
  createProposal,
  getProposals,
  deleteProposalById,
  toggleProposalStatus,
  handleProposalPrintPDF,
  handleDownloadPDF,
} from "../controllers/proposalController.js";
import { protectRoute } from "../middlewares/authMiddlewave.js";
const router = express.Router();

router.post("/create", protectRoute, createProposal);
router.get("/", protectRoute, getProposals);
router.get("/:id", protectRoute, getProposalById);
router.delete("/:id", protectRoute, deleteProposalById);
router.post("/switch", protectRoute, toggleProposalStatus);
router.post("/print", protectRoute, handleProposalPrintPDF);
router.post("/download", protectRoute, handleDownloadPDF);

export default router;
