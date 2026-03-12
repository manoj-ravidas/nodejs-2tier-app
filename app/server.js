const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://mongo:27017/mydb")

const userSchema = new mongoose.Schema({
  name: String
})

const User = mongoose.model("User", userSchema)

app.get("/", async (req,res) => {

  const user = new User({name:"DevOps Engineer"})
  await user.save()

  res.send("Data saved in MongoDB")

})

app.listen(3000,()=>{
 console.log("Server running on port 3000")
})
