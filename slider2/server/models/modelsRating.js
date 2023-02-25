const sequelize = require('../db.js') ; 
const {DataTypes} = require('sequelize') ; 

const Like = sequelize.define('like' , {
    id: {type: DataTypes.INTEGER , primaryKey: true , autoIncrement: true} , 
    like: {type: DataTypes.INTEGER , defaultValue: 0}
}) 

const Dislike = sequelize.define('Dislike' , {
    id: {type: DataTypes.INTEGER , primaryKey: true , autoIncrement: true} , 
    dislike: {type: DataTypes.INTEGER , defaultValue: 0}
}) 

const View = sequelize.define('View' , {
    id: {type: DataTypes.INTEGER , primaryKey: true , autoIncrement: true} , 
    view: {type: DataTypes.INTEGER , defaultValue: 0}
}) 

const PlaylistRating = sequelize.define('PlaylistRating' , {
    id: {type: DataTypes.INTEGER , primaryKey: true , autoIncrement: true} , 
    view: {type: DataTypes.INTEGER , defaultValue: 0} ,   
    like: {type: DataTypes.INTEGER , defaultValue: 0} ,  
    dislike: {type: DataTypes.INTEGER , defaultValue: 0}
}) 

module.exports = {
    Like , 
    Dislike , 
    View , 
    PlaylistRating 
}
