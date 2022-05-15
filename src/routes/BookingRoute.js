var express = require('express');
var router = express.Router();
var Booking = require("../Schema/bookingSchema")
router.post('/', async (req, res, next) => {
  try{
    let booking = new Booking(req.body);
    await booking.save()
    res.status(200).send({status:true,data:booking})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

// Edit Package
router.put('/:id', async (req, res, next) => {
  try{
   await Booking.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({status:true, data:'Booking updated Successfully'});
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    let booking  = await Booking.findById(req.params.id);
    res.status(200).send({status:true,data: booking})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});


// get All Bookings
router.get('/', async (req, res, next) => {
  try{
    let bookings  = await Booking.find();
    res.status(200).send({status:true,data: bookings})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});


router.delete('/:id', async (req, res, next) => {
  try{
    let booking  = await Booking.findByIdAndDelete(req.params.id);
    res.status(200).send({status:true,data:"Delete SuccessFully"})
  }catch(err){
    res.status(200).json({status:false,error: err.message });
  }
});

module.exports = router;
