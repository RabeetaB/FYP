var express = require('express');
var router = express.Router();
  const authSuperAdminController = require("../../controllers/superAdmin/authSuperAdminController");

  // /api/superadmin/auth
  router.get("/",authSuperAdminController.allusers);
  router.post("/signup",authSuperAdminController.signup);
  router.post("/login",authSuperAdminController.login);
  router.get("/logout",authSuperAdminController.logout);

module.exports = router;
