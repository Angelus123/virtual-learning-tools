import dotenv from 'dotenv';
import model from '../database/models';
import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';
import config from "../config/config"
import {Op} from "sequelize"

/**
 * Get the Models
 */
const User = model.User;
dotenv.config();

export  const getAllUsers = catchAsync(async(req, res,next) => {
/**
 * Fetch all Active users 
 */

  const allUsers = await User.findAll({where:{
    isActive:{
      [Op.eq]:true
    }  
  },
  include: ["subsers"]

  })

  
/**
 * Send Back users
 */

  res.status(200).json({
    status:"success",
    result:allUsers.length,
    data:{
      users:allUsers
    }
  })
})


export const getUser = catchAsync(async(req,res,next)=>{

  /**
   * Get user id(uuid)
   */

  const uuid = req.params.uuid

   /**
   * Find user by id(uuid)
   */

  const user = await User.findOne({where:{uuid}})
  
   /**
   * provide a generic message if no user found with that ID
   */

  if(!user){
    return next(new AppError("No User found with that ID",404))
  }
  

   /**
   * Send Back User
   */

  res.status(200).json({
    status:"success",
    data:{
      user
    }
  })
})


export const deActivateUser = catchAsync(async(req,res,next)=>{

  /**
   * Deactivating User instead of deleting
   */

  const uuid = req.params.uuid
  
  const user = await User.findOne({where:{uuid}})

  if(!user){
   return next(new AppError("No user found with that ID",400))
  }
  
   /**
   * Deactivating the user 
   */

  await User.update({isActive:false},{where:{uuid}})
  
  
  res.status(200).json({
   status:"success",
   message:"User deleted Successfully!!"
  })

})



export const deleteUser = catchAsync(async(req, res,next)=>{

  /**
   * Delete user based on id(uuid)
   */

  const uuid = req.params.uuid

  
  /**
   * Check if the user is there
   */

  const user = await User.findOne({where:{uuid}})
  
  /**
   * Send back a generic message if no user found with that ID
   */

  if(!user){
   return next(new AppError("No user found with that ID",400))
  }

  /**
   * Delete user based on id(uuid)
   */

  await User.destroy({where:{uuid}})
 
  
 
  res.status(200).json({
    status:"success",
    message:"User deleted Successfully",
  })

})
