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
  const card = [{
    name:'Benjamin Moore',
    type:'Светильник',
    descripton:'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
    price:'150 000',
    image:'/images/lamp.png'
  },{
    name:'Paint Here Glory',
    type:'Кресло',
    descripton:'Функциональная дизайнерское кресло для создания максимально уюта в помещении',
    price:'120 000',
    image:'/images/armchair.png'   
  },{
    name:'Benjamin Moore',
    type:'Высокий стол',
    descripton:'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
    price:'235 000',
    image:'/images/table.png'  
  }]
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