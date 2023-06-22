const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
// const { default: header } = require("../frontend/src/pages/home/header")

const PORT = process.env.PORT || 5000; 
dotenv.config();
app.use(express.json());

// CONNECTING MONGODB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Connected to monogdb.."))
.catch((err) => console.log(err)) 

// CORS Policy Headers
// header('Access-Control-Allow-Origin: localhost:3000');
// header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
// header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

// UPLOADING FILE
app.use(express.urlencoded({extended: false}))
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))    // public directory for images

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./uploads");
    },
    filename: (req,file,cb) => {
        cb(null, req.body.name);
    }
}) 

const upload = multer({storage})
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})

// USING ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);  
app.use("/api/posts", postRoute);  


// LISTENING
app.listen(PORT, () => {
    console.log("Port is running...");
})