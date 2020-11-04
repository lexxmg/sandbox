class Button {
  _declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[ (number % 10 < 5) ? number % 10 : 5 ] ];
  }

  constructor() {
    this._btnName = 'btn';
    this._bgColor = '';
    this._color = '';
    this._count = 0;
  }

  createBtn() {
    const body = document.querySelector('body');
    const btn = document.createElement('button');

    btn.className = 'btn';
    btn.style.backgroundColor = this._bgColor;
    btn.style.color = this._color;
    btn.innerHTML = this._btnName;

    body.append(btn);

    btn.addEventListener('click', () => {
      this._count++;

      btn.innerHTML = this._count;
      btn.innerHTML += ' ' + this._declOfNum(this._count, ['клик', 'клика', 'кликов']);
    });
  }

  options({
    btnName = this._btnName,
    bg = this._bgColor,
    color = this._color
  } = {}) {
    this._btnName = btnName;
    this._bgColor = bg;
    this._color = color;
  }
}


export default Button;
