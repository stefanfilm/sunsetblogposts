const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class BlogPost extends Model { }

BlogPost.init(
  {
    // define columns
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    title: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

module.exports = BlogPost;
