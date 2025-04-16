
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const contactoRoutes = require('./routes/contacto');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/contacto', contactoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
