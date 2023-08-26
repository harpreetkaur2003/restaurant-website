const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

mongoose.connect('mongodb+srv://harshalmcse21:04harshal04@cluster0.t6ueriw.mongodb.net/ReservationsDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

const reservationSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  day: String,
  time: String,
  guestCount: String,
  hotelName: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

app.post('/submit-reservation', async (req, res) => {
  try {
    const { fullName, phoneNumber, day, time, guestCount, hotelName } = req.body;

    const newReservation = new Reservation({
      fullName,
      phoneNumber,
      day,
      time,
      guestCount,
      hotelName
    });

    await newReservation.save();
    res.status(201).json({ message: 'Reservation submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Reservation submission failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
