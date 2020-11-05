import Button from './button/btn.js';
import './button/btn.css';


const btn1 = new Button();
const btn2 = new Button();

btn1.options({
  btnName: 'Кнопкa-1',
  bg: 'green',
  color: '#fff'
});

btn2.options({
  color: 'red'
});

btn1.createBtn();
btn2.createBtn();
