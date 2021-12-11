import { state } from "../src/state";

export function init() {
  class TodoItemEl extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    connectedCallback() {
      state.subscribe(() => {
        this.render();
      });
    }

    render() {
      this.shadow.innerHTML = "";

      let style = document.createElement("style");

      style.textContent = `

  
            .todo-style{
              box-sizing: border-box;
              background-color:#FFF599;
              width:100%;
              max-width:311px;
              min-height: 112px;
              margin: 0px;
              padding: 22px 13px;
              font-size: 18px;
              font-family: 'Poppins', sans-serif;
              font-weight: 400;
              margin: 20px 0px;
              display: flex;
              justify-content: space-between;

            }

          


            .container-style{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }

            .checkbox-style{
                width:21px;
                height:21px;
            }

            .remove-style{
                width:21px;
                height:21px;
                display:none;
            }
  
    
    
        `;

      this.shadow.appendChild(style);

      const stateData = state.getState();

      stateData.tasks.sort((a, b) => a.checked - b.checked);

      stateData.tasks.map((item) => {
        let toDoEl = document.createElement("div");
        toDoEl.className = "todo-style";

        toDoEl.textContent = item.task;
        toDoEl.id = item.id;
        toDoEl.setAttribute("checked", item.checked);

        let checkBoxEl = document.createElement("input");
        checkBoxEl.type = "checkbox";
        checkBoxEl.className = "checkbox-style";
        checkBoxEl.textContent = this.textContent;

        let removeEl = document.createElement("img");
        removeEl.src = "./__parcel_source_root/images/bin.png";
        removeEl.className = "remove-style";

        toDoEl.addEventListener("click", () => {
          if (toDoEl.style.border == "2px solid") {
            toDoEl.style.border = "";
          } else {
            toDoEl.style.border = "solid 2px";
          }
        });

        checkBoxEl.addEventListener("click", () => {
          let selectedTask = state.searchTask(toDoEl.id);
          selectedTask = selectedTask[0];

          if (toDoEl.style.textDecorationLine === "line-through") {
            toDoEl.style.textDecorationLine = "";
            removeEl.style.display = "none";
            selectedTask.checked = false;
          } else {
            toDoEl.style.textDecorationLine = "line-through";
            removeEl.style.display = "initial";
            selectedTask.checked = true;
          }
          console.log(
            `le hiciste check a una task, este es el state actualizado`,
            state.getState()
          );
          localStorage.setItem("saved-state", JSON.stringify(state.getState()));
        });

        const checkedValue = toDoEl.getAttribute("checked");

        if (checkedValue === "true") {
          toDoEl.style.textDecorationLine = "line-through";
          removeEl.style.display = "initial";
          checkBoxEl.checked = true;
        } else {
          toDoEl.style.textDecorationLine = "";
          removeEl.style.display = "none";
          checkBoxEl.checked = false;
        }

        removeEl.addEventListener("click", () => {
          state.removeTask(toDoEl.id);
          toDoEl.remove();
        });

        let containerEl = document.createElement("div");
        containerEl.className = "container-style";

        this.shadow.appendChild(toDoEl);
        toDoEl.appendChild(containerEl);
        containerEl.appendChild(checkBoxEl);
        containerEl.appendChild(removeEl);
      });
    }
  }

  customElements.define("todo-item", TodoItemEl);
}
