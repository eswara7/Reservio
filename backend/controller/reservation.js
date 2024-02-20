
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";



const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  if (!firstName||!lastName||!email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({firstName,lastName,email,phone,time,date });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (Error) {
    // Handle Mongoose validation errors
    if (Error.name === 'ValidationError') {
      const validationErrors = Object.values(Error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(' , '), 400));
    }

    // Handle other errors
    return next(Error);
  }
};


export default send_reservation;