const refs = {
  button1: document.querySelector('#button-1'),
  button2: document.querySelector('#button-2'),
  button3: document.querySelector('#button-3'),
  button4: document.querySelector('#button-4'),

  text1: document.querySelector('#text-1'),
  text2: document.querySelector('#text-2'),
  text3: document.querySelector('#text-3'),
  text4: document.querySelector('#text-4'),
};
console.log(refs.text4);

refs.button1.focus();

refs.button1.addEventListener('focus', () => refs.text1.classList.add('visible-js'));
refs.button1.addEventListener('blur', () => refs.text1.classList.remove('visible-js'));

refs.button2.addEventListener('focus', () => refs.text2.classList.add('visible-js'));
refs.button2.addEventListener('blur', () => refs.text2.classList.remove('visible-js'));

refs.button3.addEventListener('focus', () => refs.text3.classList.add('visible-js'));
refs.button3.addEventListener('blur', () => refs.text3.classList.remove('visible-js'));

refs.button4.addEventListener('focus', () => refs.text4.classList.add('visible-js'));
refs.button4.addEventListener('blur', () => refs.text4.classList.remove('visible-js'));
