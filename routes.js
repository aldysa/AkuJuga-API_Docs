const express = require('express');
const handlers = require('./handler');

const router = express.Router();

router.get('/welcome1', handlers.welcome1);
router.get('/welcome2', handlers.welcome2);
router.get('/welcomefinal', handlers.welcomefinal);
router.get('/menu', handlers.menu);
router.get('/learn/alphabets', handlers.learnAlphabets);
router.get('/learn/numbers', handlers.learnNumbers);
router.get('/learn/dictionary', handlers.learnDictionary);
router.post('/classifyImageAlphabet', handlers.classifyImageAlphabet);
router.post('/classifyImageNumber', handlers.classifyImageNumber);

module.exports = router;