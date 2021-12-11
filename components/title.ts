export function init() {
  class TitleEl extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      let titleEl = document.createElement("h1");
      let style = document.createElement("style");
      titleEl.textContent = this.textContent;
      titleEl.className = "title-style";
      style.textContent = `
           
            .title-style{
            text-align: start;
            font-size: 38px;
            margin: 0px;
            padding:0px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            margin-bottom: 25px;

            }

            @media (min-width: 960px) {
                .title-style {
                    font-size: 52px;
                }
            `;
      this.shadow.appendChild(style);
      this.shadow.appendChild(titleEl);
    }
  }

  customElements.define("custom-title", TitleEl);
}
