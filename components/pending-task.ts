import { state } from "../src/state";

export function init() {
  class PendingInputEl extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      let style = document.createElement("style");

      let containerEl = document.createElement("div");
      containerEl.className = "container-style";

      let formEl = document.createElement("form");
      formEl.className = "form-style";

      let labelEl = document.createElement("label");
      labelEl.setAttribute("for", "text");
      labelEl.className = "label-style";
      labelEl.textContent = this.id;

      let inputEl = document.createElement("input");
      inputEl.className = "input-style";
      inputEl.type = "text";
      inputEl.id = "text";
      inputEl.placeholder = this.getAttribute("placeholder");

      if (this.getAttribute("placeholder") == null) {
        inputEl.placeholder = "";
      }

      let buttonEl = document.createElement("button");
      buttonEl.className = "button-style";
      buttonEl.textContent = this.textContent;

      style.textContent = `


                
      @media(min-width:960px){
        .form-style{
        display:flex;
        align-items:center;
        max-width:960px;
        }

        .input-style{
          width:100%;
          margin-right: 25px;
        }



      }

      .label-style{
        text-align:start;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

      }

      .input-style{
        text-align:start;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        min-width:312px;
        margin-bottom: 10px;
        padding: 17px 13px;
        box-sizing: border-box;
      }

      .button-style{
        background-color:#9CBBE9;
        width:100%;
        max-width:312px;
        padding: 16px 0px;
        text-align:center;
        font-size: 22px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        margin-bottom:10px;
        border-radius: 4px;
      }

  
  
      `;

      formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        let id = state.lastId();

        let item = {
          id: id,
          task: "",
          checked: false,
        };

        item.task = inputEl.value;

        if (item) {
          state.addTask(item);
          inputEl.value = "";
        } else {
          alert("El campo de tarea esta vacio, VAGO!");
        }
      });

      this.shadow.appendChild(style);
      this.shadow.appendChild(containerEl);
      containerEl.appendChild(labelEl);
      containerEl.appendChild(formEl);
      formEl.appendChild(inputEl);
      formEl.appendChild(buttonEl);
    }
  }

  customElements.define("custom-pending", PendingInputEl);
}
