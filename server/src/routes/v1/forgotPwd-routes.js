const express = require('express');
const { AuthMiddlewares } = require('../../middlewares');
const { ForgotPwdController } = require('../../controllers');

const router = express.Router();

router.post('/', AuthMiddlewares.validateEmailRequest,
            ForgotPwdController.getUser);

router.post('/reset/:id/:jwt',
            AuthMiddlewares.checkAuthReset,
            ForgotPwdController.changePwd
            );

module.exports = router;