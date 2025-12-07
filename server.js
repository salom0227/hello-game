const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// JSON body uchun
app.use(express.json());

// Frontend fayllarni berish
app.use(express.static(path.join(__dirname, 'public')));

// Ball endpoint
let highScore = 0;

app.post('/score', (req, res) => {
    const { score } = req.body;
    if(score > highScore) highScore = score;
    res.json({ highScore });
});

// Index.html ga yo'l
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlayapti`);
});

