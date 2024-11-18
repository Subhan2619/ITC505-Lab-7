const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.post('/ITC505/lab-7/index.html', (req, res) => {
    const { noun, verb, adjective, pluralNoun, place } = req.body;
    if (!noun || !verb || !adjective || !pluralNoun || !place) {
        res.send(`<h1>Error!</h1><p>All fields are required.</p><a href="/ITC505/lab-7/index.html">Try Again</a>`);
        return;
    }

    const madLib = `
        Once upon a time in ${place}, there was a ${adjective} ${noun}.
        Every day, it loved to ${verb} with its ${pluralNoun}.
        It was the happiest ${noun} in all of ${place}.
    `;

    res.send(`
        <h1>Your Mad Lib!</h1>
        <p>${madLib}</p>
        <a href="/ITC505/lab-7/index.html">Create Another</a>
    `);
});

const port = process.argv[2] === 'local' ? 8080 : 80;
app.listen(port, () => console.log(`Server running on port ${port}`));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
