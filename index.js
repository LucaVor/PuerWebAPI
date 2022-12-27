const express = require('express')
const app = express()
const port = 2999

// fetch('http://localhost:3000/api/users/Luca/10', {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "id": 78912 }),
// })
// .then(blob => blob.json())
// .then(blob => {console.log(blob);});

const ejs = require('ejs');
const path = require('path');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root:__dirname})
})

app.get('/upload_files', (req, res) => {
    res.send("{}")
})

app.post('/upload_files', upload.single("files"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.json({ message: "Successfully uploaded files" });
})

app.listen(port, () => {

})