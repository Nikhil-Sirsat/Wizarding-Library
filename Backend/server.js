if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authRoutes = require('./routes/routes.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// cors middleware
app.use(cors({
    origin: "https://wizarding-library.onrender.com",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Setup
const store = MongoStore.create({
    mongoUrl: process.env.Database_Url,
    crypto: { secret: process.env.express_session_key },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE : ", err);
});

app.use(session({
    store,
    secret: process.env.express_session_key,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }
}));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Database Setup
mongoose.connect(process.env.Database_Url)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log(`Database connection error: ${err}`);
    });

app.use('/api/auth', authRoutes);

// Listen
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
