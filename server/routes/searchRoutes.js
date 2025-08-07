import express from "express";
import { searchStationInfo } from "../controllers/searchStationInfo.js";

const router = express.Router();

router.get("/search", searchStationInfo);

export default router;
