import AppError from "./../utils/appError"

const handleJsonWebTokenErr = ()=>{
  return new AppError("Invalid token,Please login again",401)
}

const handleJwtExpireError = ()=>{
  return new AppError("Your token has expired please login again",401)
}

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};


const sendErrorProd = (error,res)=>{
  if(error.isOperational){
    res.status(error.statusCode).json({
      status:error.status,
      message:error.message
    })
  }else{
    console.error("ERROR",error)
  }
}


module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if(process.env.NODE_ENV !== 'development'){
    sendErrorDev(err, res);
    
  }else if(process.env.NODE_ENV="production"){
    let error =  err
    if(error.name==='jsonWebTokenError') error= handleJsonWebTokenErr()
    if(error.name==='TokenExpiredError') error= handleJwtExpireError()
    sendErrorProd(error,res)
  }
};
