const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use( express.json() );
app.use( cors() );

app.listen(port, () => {console.log(`Server is running on port ${port}.`);});

app.post('/function', async (req, res) => {
    console.log(req.body);
    res.send("response object");
});