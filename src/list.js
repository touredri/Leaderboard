import './index.css';
import { getScore } from './api.js';

export const list = document.querySelector('.recent-scores');
export const display = async () => {
  const storedId = localStorage.getItem('id');
  if (storedId) {
    const data = await getScore(storedId);
    list.innerHTML = '';
    data.forEach((element) => {
      const li = document.createElement('li');
      li.innerHTML = `${element.user}: ${element.score}`;
      list.appendChild(li);
    });
  }
};
