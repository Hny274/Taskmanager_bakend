const {CustomAPIError}=require('../errors/custom-error')
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    //console.log(err);
    return res.status(/*err.status*/500).json(/*{msg:err.message}*/{msg:`something went wrong`})
}
module.exports=errorHandlerMiddleware