require("./config/mongoose.config");
const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(express.json());
// app.use(cors());  USE THIS FOR EXAM
app.use(cors({ origin: "http://localhost:3000" }));

require("./routes/movie.routes")(app);

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`));
