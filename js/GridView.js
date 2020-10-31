class GridView {

  /**
  |* JS Doc
  |* properties
  |* @param [array] _tableClass
  |* @param [array] data
  |*
  |*/

  constructor() {
    this._header = '';
    this._headerClass = [];
    this._tableClass = [];
    this._element = 'body';
    this._attribute =[];
  }

  setHeader(header) {
    if (typeof header === 'string' && header.trim() !== '') {
      this._header = header.trim();
      return true;
    }

    return false;
  }

  setHeaderClass(headerClass) {
    if (typeof headerClass === 'object') {
      this._headerClass = headerClass;
      return true;
    }

    return false;
  }

  setElemrnt(element) {
    if (  document.querySelector(element) ) {
      this._element = document.querySelector(element);
      return true;
    }

    return false;
  }

  render() {

  }
}
