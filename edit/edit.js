import {saveTask} from '../index.js';

const taskName = document.querySelector('#taskName');
const description = document.querySelector('#taskDescription');
const data = localStorage.getItem('tasks');
console.log(data);

description.value = data[2];
console.log(description.value);

