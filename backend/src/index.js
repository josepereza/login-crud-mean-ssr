const  express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json());

app.use(require('./routes/index'));

app.listen(3000);
console.log('server on port', 3000);