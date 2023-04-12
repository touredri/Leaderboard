import './index.css';
import { newGame, saveScore } from './api.js';

export const form = document.querySelector('.right');
let id;
export const getId = async () => {
  const storedId = localStorage.getItem('id');
  if (storedId) {
    id = storedId;
  } else {
    id = await newGame('My game');
    localStorage.setItem('id', id);
  }
};

export const addScrore = async () => {
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
  await getId();
  saveScore(id, name, score);
};
