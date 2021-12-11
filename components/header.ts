export function init() {
  class HeaderEl extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      let style = document.createElement("style");
      let divEl = document.createElement("div");
      divEl.className = "header-style";

      style.textContent = `
            .header-style{
            background-color: #FF8282;
            height: 40px;
            padding: 17px;
            }


            `;
      this.shadow.appendChild(style);
      this.shadow.appendChild(divEl);
    }
  }

  customElements.define("custom-header", HeaderEl);
}
