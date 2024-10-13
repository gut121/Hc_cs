const { sequelize } = require('./models');
const express = require('express');
const PORT = process.env.PORT || 4000;
const TrainerRoutes = require('./routes/TrainerRoutes');
const ClientRoutes = require('./routes/ClientRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const WorkoutPlansRoutes = require('./routes/WorkoutPlansRoutes');
const WeeklySchedulesRoutes = require('./routes/WeeklySchedulesRoutes');
const MealPlanRoutes = require('./routes/MealPlanRoutes');
const sessionRoutes = require('./routes/SessionsRoutes');
const exerciseRoutes = require('./routes/ExerciseGuidesRoutes');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', AuthRoutes);
// app.use('/api/workoutplans', WorkoutPlansRoutes);
// app.use('/api/weeklyschedules', WeeklySchedulesRoutes);
// app.use('/api/meal-plans', MealPlanRoutes);
// app.use('/api/clients', ClientRoutes);
// app.use('/api/trainers', TrainerRoutes);
// app.use('/api/sessions', sessionRoutes);
// app.use('/api/exercises', exerciseRoutes);

sequelize
    .sync()
    .then(() => {
        console.log('Database & tables created!');

        app.listen(PORT, () => {
            console.log(
                `Server is running on port ${PORT}`
            );
        });
    })
    .catch((error) => {
        console.error(
            'Unable to create database tables:',
            error
        );
    });
