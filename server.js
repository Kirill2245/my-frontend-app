import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;


process.on('uncaughtException', (error) => {
  console.log('❌ Неперехваченная ошибка:', error.message);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('❌ Необработанный промис:', reason);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  const card = ["1", "2", "3"]
  console.log('✅ Маршрут / вызван');
  res.render('pages/index',{
    cardlist:card
  });
});


try {
  app.listen(PORT, () => {
    console.log(`✅ Сервер работает: http://localhost:${PORT}`);
    console.log(`✅ Тест: http://localhost:${PORT}/test`);
  });
} catch (error) {
  console.log('❌ Ошибка запуска сервера:', error.message);
}