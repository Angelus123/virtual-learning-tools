'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  

    toJSON(){
      return {
        ...this.get(),
        createdAt:undefined,
        updatedAt:undefined,
        password:undefined,
        passwordResetToken:undefined,
        isActive:undefined
      }
    }
  }
  User.init({
    uuid:{
     type:DataTypes.UUID,
     defaultValue:DataTypes.UUIDV4,
     primaryKey: true
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
    type:DataTypes.STRING,
    allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    passwordResetToken:{
      type:DataTypes.STRING,
      defaultValue:""
    },
    isActive:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  }, {
    sequelize,
    tableName:"users",
    modelName: 'User',
  });
  return User;
};


