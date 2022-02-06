const express = require('express');
const router = express.Router();

// Controllers
const { adminLogin,adminRegister } = require('../controllers/apiAdminController');

// Validations Middleware
const adminLoginValidator = require('../validations/adminLoginValidator');
const adminRegisterValidator = require('../validations/adminRegisterValidator');

/* ADMIN POST */
router.post('/login',adminLoginValidator,adminLogin);
router.post('/register',adminRegisterValidator, adminRegister);

module.exports = router;