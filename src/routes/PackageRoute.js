var express = require('express');
var router = express.Router();
const Package = require("../Schema/packageSchema")


// Add Package
router.post('/', async (req, res, next) => {
  try{
    let package = new Package(req.body);
    await package.save()
    res.status(200).send({status:true,data:package})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

// Edit Package
router.put('/:id', async (req, res, next) => {
  try{
   await Package.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({status:true, data:'Package updated Successfully'});
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

//  find  A Packages
router.get('/:id', async (req, res, next) => {
  try{
    let userdata  = await Package.findById(req.params.id);
    res.status(200).send({status:true,data: userdata})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

router.delete('/:id', async (req, res, next) => {
  try{
    let userdata  = await Package.findByIdAndDelete(req.params.id);
    res.status(200).send({status:true,data: userdata})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

// get All Packages
router.get('/', async (req, res, next) => {
  try{
    let allvechiles  = await Package.find();
    res.status(200).send({status:true,data: allvechiles})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }

});


module.exports = router;
