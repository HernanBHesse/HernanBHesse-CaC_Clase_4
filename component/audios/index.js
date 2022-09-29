export default class Audio {
  constructor(url, css_class) {
    this.url = url;
    this.css_class = css_class;
  }

  render() {
    let myHTML = `<audio controls><source src=${this.url} type="audio/ogg"><source  class=${this.css_class} src=${this.url} type="audio/mpeg">Your browser does not support the audio element.</audio>`;

    return myHTML;
  }
}
