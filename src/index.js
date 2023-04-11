import './index.css';
import { form, addScrore } from './input.js';

form.innerHTML = `<h2>Add your score</h2>
<form>
    <input type="text" class="name" placeholder="Your name" required>
    <input type="number" class="score" placeholder="Your score" required>
    <button type="submit">Submit</button>
</form>`;

const add = document.querySelector('form');
add.addEventListener('submit', (e) => {
  e.preventDefault();
  addScrore();
  add.reset();
});
