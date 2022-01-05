
const mongoose=require("mongoose")



 const connect = () => {
 
    mongoose.connect("mongodb+srv://paapu:Paapu_123@cluster0.n49uw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = connect;