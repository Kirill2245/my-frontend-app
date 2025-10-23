import express from 'express';
import { type } from 'os';
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
  const category_card = [{
    name:'напольные зеркала',
    count:4,
    type:'зеркала',
    other_text:'изготовление на заказ',
    image:'/images/mirror.png'
  },{
    name:'торшеры и лампы',
    count:4,
    type:'зеркала',
    other_text:'изготовление на заказ',
    image:'/images/mirror.png'
  },{
    name:'кресла и стулья',
    count:4,
    type:'зеркала',
    other_text:'изготовление на заказ',
    image:'/images/mirror.png'
  },{
    name:'столы и тумбы',
    count:4,
    type:'зеркала',
    other_text:'изготовление на заказ',
    image:'/images/mirror.png'
  }]
  console.log('✅ Маршрут / вызван');
  res.render('pages/index',{
    cardlist:card,
    category_card:category_card
  });
});
app.get('/selected-category/:id', (req, res) => {
    const productList1 = [
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000', color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000',  color:'#A5D4FF', image:'/images/elongated.png' },
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000',  color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000',  color:'#A5D4FF', image:'/images/elongated.png'},
    ]
    const products = [
        {id:1, list:productList1},
        {id:2, list:productList1},
        {id:3, list:productList1},
        {id:4, list:productList1}
    ];
    const categoryId = req.params.id;
    const category = products.find(card => card.id == categoryId);
    
    res.setHeader('Content-Type', 'application/json');
    res.json(category);
});

try {
  app.listen(PORT, () => {
    console.log(`✅ Сервер работает: http://localhost:${PORT}`);
    console.log(`✅ Тест: http://localhost:${PORT}/test`);
  });
} catch (error) {
  console.log('❌ Ошибка запуска сервера:', error.message);
}