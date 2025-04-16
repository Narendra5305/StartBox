
const express = require('express');
const cors = require('cors');
const {toConnectDb} = require("./config/config"); 


const {UserRouter} = require("./routes/userRoutes")
const {StartUpRouter} = require("./routes/startupRoutes")
const {JobRouter} = require("./routes/jobRoutes")
const {ApplicationRouter} = require("./routes/applicationRoutes")


const app = express();


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}));


app.use(express.json());

app.use("/users" ,UserRouter)
app.use("/startUps" ,StartUpRouter)
app.use("/jobs" ,JobRouter)
app.use("/applications" ,ApplicationRouter)


app.get('/', (req, res) => {
  res.send('Hello , this is startbox api');
});


const PORT = 8080;
app.listen(PORT, () => {
  toConnectDb(); 
  console.log(`Server is running on http://localhost:${PORT}`);
});
