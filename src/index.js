const express = require("express");
require("./db/mongoose"); //connection created (will run the content of mongoose.js)
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT;

app.use(express.json()); //to parse data coming in to json by default
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server running on port: " + port);
});
