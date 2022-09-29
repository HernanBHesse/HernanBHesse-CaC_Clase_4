export default class NavBar {
  constructor(title, url ) {
    this.title = title;
    this.url = url;
  }
  render() {
    let myHTML = `<li><a href="index.html#${this.url}">${this.title}</a></li>`;
    return myHTML;
  }
}
