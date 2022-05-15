var express = require('express');
var router = express.Router();
const User =  require('../Schema/userSchema')
/* GET home page. */
router.post('/', async (req, res, next) => {
  const email = req.body.email
  const password  = req.body.password
  const role = req.body.role
  try {
    let user = await User.find({email:email})
    if(user.length === 1){
      if(user[0].password === password && user[0].type === role){
        res.status(200).send({status:true,data: user})
      }else{
        res.status(200).send({status:false,message:"No user Found"})
      }
    }else{
      res.status(200).send({status:false,message:"No user Found"})
    }

  } catch (err) {
    res.status(200).json({status:false,message: err.message });
  }


});

module.exports = router;
