const express = require('express');
const PetsController = require('../controllers/PetsController');
const router = express.Router();

router.get('/register', PetsController.registerPage);
router.post('/register', PetsController.register);

router.get('/login', PetsController.loginPage);
router.post('/login', PetsController.login);

router.get('/index', PetsController.mainPage);
router.get('/medication', PetsController.medicationPage);
router.get('/medication/acepromazine-maleate', PetsController.acepromazineMaleatePage);
router.get('/medication/acetaminophen-tylenol', PetsController.acetaminophenTylenolPage);
router.get('/medication/aluminum-hydroxide', PetsController.aluminumHydroxidePage);

router.get('/food', PetsController.foodPage);

router.get('/training', PetsController.trainingPage);

router.get('/contact', PetsController.contactPage);

router.get('/rules', PetsController.rulesPage);

router.get('/privacyPolicy', PetsController.privacyPolicyPage);

router.get('/about', PetsController.aboutPage);

module.exports = router;
