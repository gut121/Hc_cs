const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TrainerDetails = sequelize.define(
    'TrainerDetails',
    {
        specialties: {
            type: DataTypes.STRING(255),
        },
        available_slots: {
            type: DataTypes.TEXT,
        },
        trainer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        tableName: 'TrainerDetails',
    }
);

module.exports = TrainerDetails;
