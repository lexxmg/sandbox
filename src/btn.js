let counter = createCounter(1);

function createBtn() {
  const body = document.querySelector('body');
  const btn = document.createElement('button');

  btn.className = 'btn';
  btn.innerHTML = 'кнопка';

  body.append(btn);

  btn.addEventListener('click', () => {
    const count = counter();

    btn.innerHTML = count;
    btn.innerHTML += ' ' + declOfNum(count, ['клик', 'клика', 'кликов']);
  });

  console.log('кнопка создата');
}

function createCounter(count) {
  return function() {
    return count++;
  }
}

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[ (number % 10 < 5) ? number % 10 : 5 ] ];
}

export default createBtn;
