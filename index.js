const express = require('express');
const app = express();
const { PORT } = require('./src/constans/config');

/**
 * services 
 */

app.listen(PORT, (err) => {
    if (err) throw new Error('Error while connecting server');
    console.info(`server running on ${PORT}`)
})