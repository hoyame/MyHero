const { Router } = require('express');
const router = Router();

const {
	validationSignup,
	isUserExistsSignup,
	validateLogin,
	authenticateToken,
	validationUpdateProfile,
	isUserExistsUpdate,
	validationChangePassword,
	validationForgotPassword,
	isEmailRegistered,
	validationResetPassword,
	isResetTokenValid,
} = require('../middlewares/userMiddleware');

const usersController = require('../controllers/usersController');

router.post(
	'/user/signup',
	[validationSignup, isUserExistsSignup],
	usersController.signUp
);

router.post('/user/login', [validateLogin], usersController.login);

router.get('/user', [authenticateToken], usersController.getLoggedInUser);

router.post(
	'/user/update_profile',
	[authenticateToken, validationUpdateProfile, isUserExistsUpdate],
	usersController.updateProfile
);

router.post(
	'/user/change_password',
	[authenticateToken, validationChangePassword],
	usersController.changePassword
);

router.post(
	'/user/forgot_password',
	[validationForgotPassword, isEmailRegistered],
	usersController.forgotPassword
);

router.get(
	'/user/forgot_password/verify/:token',
	usersController.forgotPasswordVerify
); 

router.post(
	'/user/reset_password',
	[validationResetPassword, isResetTokenValid],
	usersController.resetPassword
); 

router.post('/user/add_rate', usersController.addRate); 


module.exports = router;