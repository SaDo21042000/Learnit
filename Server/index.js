require('dotenv').config()
const cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')


const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pzbj4fe.mongodb.net/LearnIt?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
app.use(express.json())
app.use(cors())


//app.get("/", (req, res) => res.send("Hello wold"));
app.use('/api/auth', authRouter )
app.use('/api/posts', postRouter)

//const PORT = 5001;
const PORT =  process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
