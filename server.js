const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Привет от Express сервера!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📁 Откройте http://localhost:${PORT}`);
});