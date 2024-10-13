const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SessionExercises = sequelize.define('SessionExercises', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    session_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Sessions',
            key: 'id',
        },
        onDelete: 'CASCADE', 
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ExerciseGuides',
            key: 'id',
        },
        onDelete: 'CASCADE', 
    },
    sets: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
    tableName: 'SessionExercises',
});

module.exports = SessionExercises;
