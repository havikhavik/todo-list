export function initPageA(params?) {
  const div = document.createElement("div");

  div.innerHTML = `
    <custom-header></custom-header>
    <div class="page-container">
    <custom-title>Mis Pendientes</custom-title>
    <custom-pending id="Nuevo pendiente" placeholder="Ingrese una tarea">Agregar</custom-pending>
    
    <div class="todo-container">
    <todo-item></todo-item>
    </div>
    </div>
    `;

  return div;
}
