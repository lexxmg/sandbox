class Button {
  _declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[ (number % 10 < 5) ? number % 10 : 5 ] ];
  }

  constructor() {
    this.count = 0;
  }

  createBtn() {
    this.body = document.querySelector('body');
    this.btn = document.createElement('button');

    this.btn.className = 'btn';
    this.btn.innerHTML = 'кнопка';

    this.body.append(this.btn);

    this.btn.addEventListener('click', () => {
      this.count++;

      this.btn.innerHTML = this.count;
      this.btn.innerHTML += ' ' + this._declOfNum(this.count, ['клик', 'клика', 'кликов']);
    });

    console.log('кнопка создата');
  }
}


export default Button;
