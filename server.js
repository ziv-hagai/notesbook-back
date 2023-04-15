const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const notes_router = require('./routes/notes')

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 8000, () => {
    console.log(`listen on port ${process.env.PORT || 8000}`);
})

app.use('/notes', notes_router)

app.use('/', express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})