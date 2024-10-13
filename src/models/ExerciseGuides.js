const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExerciseGuides = sequelize.define(
    'ExerciseGuides',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        muscle_group: {
            type: DataTypes.STRING(255),
        },
        difficulty_level: {
            type: DataTypes.STRING(50),
        },
        video_url: {
            type: DataTypes.STRING(255),
        },
        image_url: {
            type: DataTypes.STRING(255),
        },
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        tableName: 'ExerciseGuides',
    }
);

module.exports = ExerciseGuides;
