const express = require('express'),
      router  = express.Router();
      mainController =require('../app/controllers/main.c')

module.exports = router;

router.get("/" , mainController.index );
router.get('/about' , mainController.about);
router.get('/contact' , mainController.contact);