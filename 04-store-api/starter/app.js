require("dotenv").config()
//DATABASE
const connectDB = require("./db/connect")
const url = process.env.MONGO_URI

//the routers
const productRouters = require("./routes/products")

//async errors


const express = require("express")
const app = express()

const notFoundMiddleware = require("./middleware/not-found")
const errorMiddleware = require("./middleware/error-handler")
const { route } = require("express/lib/router")

//middleware
app.use(express.json())

//routes
app.get("/",(req,res) => {
    res.send("<h1> Store api </h1> <a href='/api/vi/products'> products route</a>")
})
//routers
app.use("/api/v1/products",productRouters)
//products error handler
app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 2200
const start = async () =>{
    try{
        // connectdb
       await   connectDB(url)
        app.listen(port,() => console.log("listening to the port"))
    }
    catch(err){
        console.error(err)
    }
}
start()