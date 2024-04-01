// const express = require("express");
import express from "express";
const router = express.Router();
// const statusContrroller = require("../controller/status.controller");
import { createStatus,createClient } from "../controller/status.controller.js";


router.get('/', createStatus);
router.get('/client', createClient);

export default router;