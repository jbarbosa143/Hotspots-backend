const jwt = require("jsonwebtoken");
const express = require("express");
const ProductService = require("./services/ProductService");
const UserService = require("./services/UserService");
const PermissionService = require("./services/PermissionService");

console.log("ProductService: ", ProductService);

const router = express.Router();

// Product routes
router.get("/product-list", ProductService.fetchAllProducts);

// User Routes
router.post("/log-in", UserService.logIn);

router.get("/log-out", UserService.logOut);

router.post("/edit-user-favorites", UserService.editUserFavorites);

router.post("/register-user", UserService.registerUser);

// router.post("/add-location", UserService.)