const app = require("./index"); 
const connect = require("./configs/db");


app.listen(3003, async () => {
    await connect();


    console.log("Listening on port 3003");
})