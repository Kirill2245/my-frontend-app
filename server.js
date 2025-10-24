import express from 'express';
import { type } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatDateToRussian } from './public/js/helpers/formateDate.js';
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
    image:'/images/lampCat.png'
  },{
    name:'кресла и стулья',
    count:4,
    type:'зеркала',
    other_text:'изготовление на заказ',
    image:'/images/chair.png'
  },{
    name:'столы и тумбы',
    count:4,
    type:'зеркала',
    other_text:'изготовление на заказ',
    image:'/images/tableCat.png'
  }]
  const blog_list = [
    {
      author:'Laura Busche',
      subject_blog:'новая коллекция кресел',
      date:'2023-01-14T00:00:00.000Z',
      image:'/images/blogimg.jpg'
    },
    {
      author:'Laura Busche',
      subject_blog:'Световой дизайн в интерьере',
      date:'2023-01-14T00:00:00.000Z',
      image:'/images/test1Blog.png'
    },
    {
      author:'Laura Busche',
      subject_blog:'как выбрать шкаф в спальню',
      date:'2023-01-14T00:00:00.000Z',
      image:'/images/test2Blog.png'
    },

  ]
  const formattedData = blog_list.map(item => ({
        ...item,
        formattedDate: formatDateToRussian(item.date)
    }));
    console.log(formattedData)
  console.log('✅ Маршрут / вызван');
  res.render('pages/index',{
    cardlist:card,
    category_card:category_card,
    blog_list:formattedData
  });
});
app.get('/selected-category/:id', (req, res) => {
    const productList1 = [
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000', color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000',  color:'#A5D4FF', image:'/images/elongated.png' },
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000',  color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000',  color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000', color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000', color:'#A5D4FF', image:'/images/elongated.png'},
      {name:'Kristin', descripton:'Зеркало напольное', price:'150 000', color:'#A5D4FF', image:'/images/elongated.png'},
    ]
    const productList2 = [
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000', color:'#29D0D9', image:'/images/lampProduct.png'},
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000',  color:'#29D0D9', image:'/images/lampProduct.png' },
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000',  color:'#29D0D9', image:'/images/lampProduct.png'},
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000',  color:'#29D0D9', image:'/images/lampProduct.png'},
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000', color:'#29D0D9', image:'/images/lampProduct.png'},
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000', color:'#29D0D9', image:'/images/lampProduct.png'},
      {name:'coppelia', descripton:'Лампа настольная', price:'150 000', color:'#29D0D9', image:'/images/lampProduct.png'},
    ]
    const productList3 = [
      {name:'Wendy', descripton:'Лампа настольная', price:'150 000', color:'#F0B3EA', image:'/images/chairProd.png'},
      {name:'Wendy', descripton:'Лампа настольная', price:'150 000',  color:'#F0B3EA', image:'/images/chairProd.png' },
      {name:'Wendy', descripton:'Лампа настольная', price:'150 000',  color:'#F0B3EA', image:'/images/chairProd.png'},
      {name:'Wendy', descripton:'Лампа настольная', price:'150 000',  color:'#F0B3EA', image:'/images/chairProd.png'},
      {name:'Wendy', descripton:'Лампа настольная', price:'150 000', color:'#F0B3EA', image:'/images/chairProd.png'},
    ]
    const productList4 = [
      {name:'Judith', descripton:'Лампа настольная', price:'150 000', color:'#F88EFA', image:'/images/tableProd.png'},
      {name:'Judith', descripton:'Лампа настольная', price:'150 000',  color:'#F88EFA', image:'/images/tableProd.png' },
      {name:'Judith', descripton:'Лампа настольная', price:'150 000',  color:'#F88EFA', image:'/images/tableProd.png'},
      {name:'Judith', descripton:'Лампа настольная', price:'150 000',  color:'#F88EFA', image:'/images/tableProd.png'},
      {name:'Judith', descripton:'Лампа настольная', price:'150 000', color:'#F88EFA', image:'/images/tableProd.png'},
      {name:'Judith', descripton:'Лампа настольная', price:'150 000', color:'#F88EFA', image:'/images/tableProd.png'}
    ]
    const products = [
        {id:1, list:productList1},
        {id:2, list:productList2},
        {id:3, list:productList3},
        {id:4, list:productList4}
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