const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")

dotenv.config();
app.use(express.json());

// connecting mongodb atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Connected to monogdb.."))
.catch((err) => console.log(err)) 

// multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "images");
    },
    filename: (req,file,cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})

// using routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);  
app.use("/api/posts", postRoute);  


// listening to port
app.listen("5000", () => {
    console.log("Port is running...");
})