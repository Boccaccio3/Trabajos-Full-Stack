const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
