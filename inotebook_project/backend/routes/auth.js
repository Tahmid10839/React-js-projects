
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "tahmid420";
const fetchuser = require('../middleware/fetchUser');

//Route-1: Create a user using POST: /api/auth/createuser - No login required
router.post('/createuser',[
    body('name',"The name must be at least 3 characters").isLength({ min: 3 }),
    body('email',"Enter a valid email").isEmail(),
    body('password',"Password must be at least 5 characters").isLength({ min: 5 })
],async(req,res)=>{
    // obj = {
    //     a: "Tahmid",
    //     number: 50
    // }
    // res.json(obj);
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    //If there are errors then return bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({success, errors: errors.array() });
    }
    try{
      // Check if the user with the same email already exists
      let user = await User.findOne({email: req.body.email});
      if(user){
        success = false;
        return res.status(400).json({success,error: "Sorry a user with this email already exists"});
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt);
      // Create a new user
      user = await User.create({
          name: req.body.name,
          password: secPass,
          email: req.body.email,
        })
        // .then(user => res.json(user)).catch(err=>{console.log(err) 
        //   res.json({error: "Please enter a unique value for email",message:err.message})})
      // res.send(req.body);
      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      // console.log(jwtData);

      // res.json(user);
      res.json({success:true,authToken});
    } catch(error){
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
})

//Route-2: Authenticate a user using POST: /api/auth/login - No login required
router.post('/login',[
  body('email',"Enter a valid email").isEmail(),
  body('password',"Password can not be blank").exists(),
],async(req,res)=>{

  let success = false;
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try{
    const {email,password} = req.body;
    let user = await User.findOne({email});
    if(!user){
      success = false;
      return res.status(400).json({success,error: "Please try to login with correct credentials"});
    }
    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      success = false;
      return res.status(400).json({success,error: "Please try to login with correct credentials"});
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data,JWT_SECRET);
    res.json({success: true,authToken});

  }catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error");
  }

})

//Route-3: Get the logged in user details using POST: /api/auth/getuser - login required
router.post('/getuser',fetchuser,async(req,res)=>{
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  }catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
})
module.exports = router;