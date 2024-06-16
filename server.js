const express = require('express');
const fileUpload = require('express-fileupload');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(fileUpload());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});