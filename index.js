const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const { mongoURI, cookieKey } = require("./config/keys");
require("./models/User");
require("./models/Todo");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/todoRoutes")(app);

const PORT = process.env.PORT || 4111;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
