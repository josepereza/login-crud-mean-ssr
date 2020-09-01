const {Router} = require('express');
const router = Router();

const {
    renderIndex,
    renderSignup,
    renderSignin,
    renderTasks,
    createNewNote,
    renderPrivateTasks,
    verifyToken,
    deleteNote
    } = require('../controller/controller');


    router.get('/',(req,res) => res.send('hello world'));

    router.post('/signup', renderSignup);

    router.post('/signin',renderSignin);

    router.get('/tasks',renderTasks);

    router.post('/new-note', createNewNote);

    router.get('/private-tasks', verifyToken, renderPrivateTasks);

    router.delete('/private-tasks/delete/:id', deleteNote)

   

module.exports = router;

