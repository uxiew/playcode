// Note: please restart the page if syntax highlighting works bad.
let el = document.querySelector('#header');

let msg: string = 'Hi friend, try edit me!';
el.innerHTML = msg;

console.log('it shows results as you type');

export const log = (msg: string) => {
  console.log('it shows results as you type:', msg);
};
