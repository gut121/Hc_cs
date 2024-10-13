const { ExerciseGuides } = require('../models');

// Tạo bài tập mới
const createExercise = async (req, res) => {
    try {
        const { name, description, muscle_group, difficulty_level, video_url, image_url, created_by } = req.body;

        const exercise = await ExerciseGuides.create({
            name,
            description,
            muscle_group,
            difficulty_level,
            video_url,
            image_url,
            created_by,
        });

        res.status(201).json({ exercise });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create exercise' });
    }
};

// Lấy danh sách các bài tập
const getExercises = async (req, res) => {
    try {
        const exercises = await ExerciseGuides.findAll();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve exercises' });
    }
};

// Cập nhật thông tin bài tập
const updateExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, muscle_group, difficulty_level, video_url, image_url } = req.body;

        const exercise = await ExerciseGuides.findByPk(id);
        if (!exercise) {
            return res.status(404).json({ error: 'Exercise not found' });
        }

        exercise.name = name || exercise.name;
        exercise.description = description || exercise.description;
        exercise.muscle_group = muscle_group || exercise.muscle_group;
        exercise.difficulty_level = difficulty_level || exercise.difficulty_level;
        exercise.video_url = video_url || exercise.video_url;
        exercise.image_url = image_url || exercise.image_url;

        await exercise.save();
        res.status(200).json({ exercise });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update exercise' });
    }
};

// Xóa một bài tập
const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;

        const exercise = await ExerciseGuides.findByPk(id);
        if (!exercise) {
            return res.status(404).json({ error: 'Exercise not found' });
        }

        await exercise.destroy();
        res.status(200).json({ message: 'Exercise deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete exercise' });
    }
};

module.exports = {
    createExercise,
    getExercises,
    updateExercise,
    deleteExercise,
};


//validation : ràng buộc từng dữ liệu từ body
