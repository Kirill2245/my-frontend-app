const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для статических файлов
app.use(express.static('public'));

// Создаем папку public если её нет
const fs = require('fs');
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Записываем простой HTML в public папку
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Мое приложение</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 { 
            font-size: 2.5em; 
            margin-bottom: 20px;
        }
        p { 
            font-size: 1.2em; 
            line-height: 1.6;
        }
        .deploy-info {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Мое Express приложение</h1>
        <p>Это тестовое приложение для демонстрации автоматического деплоя!</p>
        
        <div class="deploy-info">
            <h3>Информация о деплое:</h3>
            <p><strong>Версия:</strong> 1.0.0</p>
            <p><strong>Время сборки:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Статус:</strong> ✅ Работает отлично!</p>
        </div>

        <p>Попробуйте сделать изменения в коде и запушить в main ветку - они автоматически появятся здесь!</p>
    </div>
</body>
</html>
`;

fs.writeFileSync('public/index.html', htmlContent);

// Основной маршрут
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Простой API endpoint для теста
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Привет от Express сервера!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📁 Откройте http://localhost:${PORT}`);
});