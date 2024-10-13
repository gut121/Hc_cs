const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Messages = sequelize.define('Messages', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        receiver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: true,  
        },
        media_url: {
            type: DataTypes.STRING(255),
            allowNull: true,  
        },
        media_type: {
            type: DataTypes.ENUM('image', 'video'),  
            allowNull: true,  
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: true,
        tableName: 'Messages',
    }
);

module.exports = Messages;
