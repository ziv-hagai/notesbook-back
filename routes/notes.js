const express = require('express');
const router = express.Router();
const { _getAllNotes, _getNote, _searchNote, _insertNote, _deleteNote, _updateNote } = require('../controllers/notes');

router.get('/search', _searchNote)
router.get('/n/:id', _getNote)
router.get('/all', _getAllNotes)
router.post('/', _insertNote)
router.delete('/:id', _deleteNote)
router.put('/:id', _updateNote)

module.exports = router

