const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const cors = require('cors')

const PORT = process.env.PORT || 5000; 
dotenv.config();
app.use(express.json());
app.use(cors())
// app.use(
//     cors({
//         origin: '*'
//     })
// )

// CONNECTING MONGODB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Connected to monogdb.."))
.catch((err) => console.log(err)) 

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
app.use("/auth", authRoute);
app.use("/users", userRoute);  
app.use("/posts", postRoute);  


// LISTENING
app.listen(PORT, () => {
    console.log("Port is running...");
})