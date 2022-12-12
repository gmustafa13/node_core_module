const path = require('path')
require('dotenv').config({
    path: path.resolve(`.env.${process.env.NODE_ENV}`),
});
const { PORT = 3000 } = process.env
module.exports = {
    PORT
}