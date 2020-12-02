const router = require('express').Router();
const { getUsers, getUser, getUserMe } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getUserMe);
router.get('/users/:id', getUser);
// router.post('/users', createUser);

module.exports = router;
