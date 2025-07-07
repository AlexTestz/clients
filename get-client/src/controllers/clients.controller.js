const pool = require('../config/db');

// 🔍 get all clients
exports.getAllClients = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM clients ORDER BY id');
    res.status(200).json({ clients: result.rows });
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).json({ message: 'Failed to fetch clients' });
  }
};

// 🔍 get client id
exports.getClientById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.status(200).json({ client: result.rows[0] });
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).json({ message: 'Failed to fetch client' });
  }
};
