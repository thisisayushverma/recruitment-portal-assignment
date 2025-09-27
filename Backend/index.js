import { app } from "./src/app.js";
import { connectDb } from "./db/mongodb.js";
import { PORT } from "./src/constant.js";



connectDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running on port 4000");
    })
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})