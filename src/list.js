import './index.css';

export const list = document.querySelector('.recent-scores');

export const alllist = [];

window.onload = () => {
  const data = JSON.parse(localStorage.getItem('list'));
  if (data) {
    data.forEach((element) => {
      const li = document.createElement('li');
      li.innerHTML = `${element.name}: ${element.score}`;
      list.appendChild(li);
    });
  }
};