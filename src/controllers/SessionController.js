const { Sessions, SessionExercises, ExerciseGuides, User } = require('../models');


const createSession = async (req, res) => {
    try {
        const { client_id, trainer_id, session_date, exercises } = req.body;

       
        const session = await Sessions.create({
            client_id,
            trainer_id,
            session_date,
            status: 'pending', // Mặc định là pending
        });

        // Thêm các bài tập vào session
        if (exercises && exercises.length > 0) {
            for (const exercise of exercises) {
                await SessionExercises.create({
                    session_id: session.id,
                    exercise_id: exercise.exercise_id,
                    sets: exercise.sets,
                    reps: exercise.reps,
                });
            }
        }

        res.status(201).json({ session });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create session' });
    }
};

// Lấy danh sách các buổi tập
const getSessions = async (req, res) => {
    try {
        const sessions = await Sessions.findAll({
            include: [
                { model: User, as: 'Client', attributes: ['name'] },
                { model: User, as: 'Trainer', attributes: ['name'] },
                {
                    model: ExerciseGuides,
                    through: { attributes: ['sets', 'reps'] },
                },
            ],
        });
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve sessions' });
    }
};

// Cập nhật thông tin buổi tập
const updateSession = async (req, res) => {
    try {
        const { id } = req.params;
        const { session_date, status } = req.body;

        const session = await Sessions.findByPk(id);
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }

        session.session_date = session_date || session.session_date;
        session.status = status || session.status;
        await session.save();

        res.status(200).json({ session });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update session' });
    }
};

// Xóa một buổi tập
const deleteSession = async (req, res) => {
    try {
        const { id } = req.params;

        const session = await Sessions.findByPk(id);
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }

        await session.destroy();
        res.status(200).json({ message: 'Session deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete session' });
    }
};

module.exports = {
    createSession,
    getSessions,
    updateSession,
    deleteSession,
};
