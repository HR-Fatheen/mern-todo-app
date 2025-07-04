const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// POST a new todo
router.post('/', async (req, res) => {
    const newTodo = new Todo({
        task: req.body.task
    });
    await newTodo.save();
    res.json(newTodo);
});

// PUT to update a todo
router.put('/:id', async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE a todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
});

module.exports = router;
