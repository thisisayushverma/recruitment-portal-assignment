import { app } from "./src/app.js";
import { connectDb } from "./db/mongodb.js";



connectDb()
.then(()=>{
    app.listen(4000,()=>{
        console.log("server is running on port 4000");
    })
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})