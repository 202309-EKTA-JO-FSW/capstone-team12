const express = require("express");
const cors = require("cors");
require("dotenv").config();
const passport = require('passport');
require('./config/passport')
const authRoutes = require('./routes/authRoutes');
const session = require('express-session');


const connectToMongo = require("./db/connection");

const ticketRoutes = require('./routes/ticketRoutes');

const eventsRoute = require("./routes/eventRoutes");

const orderRoutes = require('./routes/orderRoutes')

// const adminRoute = require("./routes/admin");
// const userRoute = require("./routes/user");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));//true

//middleware
app.use(express.json());

// app.use("/api/user", userRoute);
app.use(session({
  secret: '12345',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/events', eventsRoute);

app.use('/auth', authRoutes);

app.use('/api/users', require('./routes/userRoutes'))

app.use('/api/tickets', ticketRoutes);

app.use('/api', orderRoutes);









// app.use('/auth', require('./routes/authRoutes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

module.exports = app;
