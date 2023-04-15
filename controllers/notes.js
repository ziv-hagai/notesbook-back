const { getAllNotes, getNote, searchNote, insertNote, deleteNote, updateNote } = require('../modules/notes');

const _getAllNotes = (req, res) => {
    getAllNotes()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

const _getNote = (req, res) => {
    getNote(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

const _searchNote = (req, res) => {
    searchNote(req.query.q)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

const _insertNote = (req, res) => {
    insertNote(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

const _deleteNote = (req, res) => {
    deleteNote(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

const _updateNote = (req, res) => {
    updateNote(req.params.id, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

module.exports = {
    _getAllNotes, _getNote, _searchNote, _insertNote, _deleteNote, _updateNote
}
