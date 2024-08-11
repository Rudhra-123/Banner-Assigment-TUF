const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Use mysql2 instead of mysql

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bannerDB',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Exit process with failure code
  }
  console.log('MySQL Connected...');
});

app.get('/banner', (req, res) => {
  db.query('SELECT * FROM banner LIMIT 1', (err, result) => {
    if (err) {
      console.error('Error fetching banner:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.send(result[0]);
  });
});

app.post('/banner', (req, res) => {
  const { description, timer, link } = req.body;
  db.query(
    'UPDATE banner SET description = ?, timer = ?, link = ? WHERE id = 1',
    [description, timer, link],
    (err, result) => {
      if (err) {
        console.error('Error updating banner:', err);
        return res.status(500).send('Internal Server Error');
      }
      res.send(result);
    }
  );
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
