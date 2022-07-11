require("./config/mongoose.config");

const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json()); // => req.body ={}
//const routes = require('./routes/student.routes')(app);
// routes(app)
require("./routes/student.routes")(app);
app.listen(PORT, () => console.log(`APP IS RUNNING ON ${PORT}`));
