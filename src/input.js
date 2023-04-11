import './index.css';
import { list } from './list.js';

export const form = document.querySelector('.right');

export const addScrore = () => {
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
  const li = document.createElement('li');
  li.innerHTML = `${name}: ${score}`;
  list.appendChild(li);
  const object = {
    name,
    score,
  };
  const alllist = JSON.parse(localStorage.getItem('list')) || [];
  alllist.push(object);
  localStorage.setItem('list', JSON.stringify(alllist));
};
