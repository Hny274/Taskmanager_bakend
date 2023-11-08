const mongoose=require('mongoose')


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