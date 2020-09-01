const Controller = {};
const User = require('../models/User');
const Note = require('../models/Notes');
const jwt = require('jsonwebtoken');


Controller.renderIndex = (req,res) => {
    res.send('hello world');
};

 Controller.renderSignup =  async (req,res) => {
    const {email,password} = req.body;
    const newUser = new User ({email:email,password:password});
    await newUser.save();
    
    const token = jwt.sign({id_: newUser._id}, 'secretkey')
    res.status(200).json({token})
};

Controller.renderSignin = async (req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).send("the email dosent exists" );
    if(user.password !== password) return res.status(401).send('wrong password');

    
    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
};

Controller.renderTasks =  (req,res) => {
    res.json([
        {
            _id: 1,
            name: 'task one',
            description: 'lorem ipsum',
            date: '2020-03-19T16:18:12.924Z'
        },
        {
            _id: 2,
            name: 'task two',
            description: 'lorem ipsum',
            date: '2020-03-19T16:18:12.924Z'
        },
        {
            _id: 3,
            name: 'task three',
            description: 'lorem ipsum',
            date: '2020-03-19T16:18:12.924Z'
        },
    ])
};



Controller.createNewNote = async (req ,res) =>{
    const {title,description} = req.body;
    const newNote = new Note({title: title, description: description});
    await newNote.save();
    return res.json({mensaje:"nota guardada"});
};


Controller.renderPrivateTasks = async (req, res) => {
    const task = await Note.find();
   return res.json({task});
};

Controller.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    return res.json({mensaje:"nota eliminada"});
 }
 

Controller.verifyToken = (req,res,next) =>{
    if(!req.headers.authorization){
        return res.status(401).send('aunathorize request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('aunathorize request');
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;
    next();
}



    module.exports = Controller;