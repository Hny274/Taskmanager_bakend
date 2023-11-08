const mongoose=require('mongoose')

//const connectionString='mongodb+srv://Hunny:hkah27731@taskmanager.sxc1gom.mongodb.net/Taskmanager?retryWrites=true&w=majority'

const connectDB=(url)=>{
    return mongoose
    .connect(url/*connectionString*//*,{
        useNerUrlParser:true,
        useCreateIndex:true,
        useFindAndMOdify:false,
        useUnifiedTopology:true,
    }*/)
}

module.exports=connectDB

//mongoose
    //.connect(connectionString
        /*{
        useNerUrlParser:true,
        useCreateIndex:true,
        useFindAndMOdify:false,
        useUnifiedTopology:true,
    }*/
    //)
    //.then(()=>console.log('connected to db'))
    //.catch((err)=>console.log(err))