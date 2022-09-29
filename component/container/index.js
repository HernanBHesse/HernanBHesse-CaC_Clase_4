export default class Container {
  constructor(titleDiv , idDiv , classDiv ) {
    this.title = titleDiv;
    this.id = idDiv;
    this.class = classDiv;
  }

  render() {
    let myHTML = `
            <div class=${this.class}><h2>${this.title}</h2><div id=${this.id}></div></div>
      `;
    return myHTML;
  }
}
