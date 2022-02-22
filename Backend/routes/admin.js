const router = require('express').Router();

// Controllers
const { adminLogin,adminRegister } = require('../controllers/apiAdminController');

// Validations Middleware
const adminLoginValidator = require('../validations/adminLoginValidator');
const adminRegisterValidator = require('../validations/adminRegisterValidator');

/* ADMIN POST */
router
.post('/login',adminLoginValidator,adminLogin)
.post('/register',adminRegisterValidator, adminRegister)

module.exports = router;