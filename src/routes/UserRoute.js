var express = require('express')
var router = express.Router();
const User =  require('../Schema/userSchema')

// Register SUer
router.post('/', async (req, res, next) => {
  const name = req.body.nameuser;
  const cnic = req.body.cnic;
  const mobile = req.body.mobile;
  const type = req.body.type;
  const email = req.body.email;
  const profile_pic = req.body.profile_pic;
  const password = req.body.password;
  let user = new User({name,cnic,mobile,email,type,password,profile_pic});
  try{
    await user.save()
    res.status(200).send({status:true,data: user})
  }catch(err){
    console.log(err, "Error");
    res.status(200).json({status:false,error: err.message });
  }


});

// get Alll users
router.get('/', async (req, res, next) => {
  try{
    let allusers  = await User.find();
    res.status(200).send({status:true,data: allusers})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    let userdata  = await User.findById(req.params.id);
    res.status(200).send({status:true,data: userdata})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

module.exports = router;
