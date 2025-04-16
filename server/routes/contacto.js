
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  try {
    await db.query(
      'INSERT INTO contactos (nombre, correo, mensaje) VALUES ($1, $2, $3)',
      [nombre, correo, mensaje]
    );
    res.status(201).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false });
  }
});

module.exports = router;
