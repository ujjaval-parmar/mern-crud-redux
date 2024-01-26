const Router = require('express').Router;

const { getUsers, createUser, updateUser, deleteUser, getUser } = require('../controllers/userController');

const router = Router();


router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)


 
module.exports = router;
