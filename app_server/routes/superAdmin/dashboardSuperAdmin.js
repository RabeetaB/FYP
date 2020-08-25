var express = require('express');
var router = express.Router();
  const dashboardSuperAdminController = require("../../controllers/superAdmin/dashboardSuperAdminController");

// /api/superadmin
  router.get("/",dashboardSuperAdminController.dashboard);

module.exports = router;
