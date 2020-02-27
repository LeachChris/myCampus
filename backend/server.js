const expres = require('express');
const cors = require('cors');

require ('dotenv').congig();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(experss.json());

app.listen(port, () => {
    console.log('Server is running on port: ${pott}');
});