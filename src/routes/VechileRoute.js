var express = require('express');
var router = express.Router();
const Vechile = require("../Schema/vechileSchema")
/* GET users listing. */

router.post('/', async (req, res, next) => {
  try{
    let vechile = new Vechile(req.body);
    await vechile.save()
    res.status(200).send({status:true,data:vechile})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

// Edit Package
router.put('/:id', async (req, res, next) => {
  try{
   await Vechile.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({status:true, data:'Vechile updated Successfully'});
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    let userdata  = await Vechile.findById(req.params.id);
    res.status(200).send({status:true,data: userdata})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

// get All Packages
router.get('/', async (req, res, next) => {
  try{
    let allvechiles  = await Vechile.find();
    res.status(200).send({status:true,data: allvechiles})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }

});

router.get('/userVehicles/:id', async (req, res) => {
  try {
    let vehicles = await Vechile.find({userid:req.params.id});

    res.status(200).json({status:true, data: vehicles });
  } catch (err) {
    console.error(err.message);
    res.status(200).json({status:false,  error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let vehicles = await Vechile.findByIdAndDelete(req.params.id)
    res.status(200).json({status:true, data:"Vechile Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(200).json({status:false,  error: err.message });
  }
});

module.exports = router;
