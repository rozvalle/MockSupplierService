const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/supplies', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
