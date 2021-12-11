const state = {
  data: {
    tasks: [],
  },
  listeners: [], // los callbacks
  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },

  getState() {
    return this.data;
  },
  setState(newState: any[]) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
    localStorage.setItem("saved-state", JSON.stringify(this.getState()));
    console.log("soy el state he cambiado", this.data);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  addTask(passedTask) {
    const cs = this.getState();

    const found = this.searchTask(passedTask.id);

    if (found[0] == undefined) {
      cs.tasks.push(passedTask);
      this.setState(cs);
    }
  },

  removeTask(id) {
    const cs = this.getState();
    const filteredState = cs.tasks.filter((task) => task.id != id);
    const newState = { tasks: filteredState };

    this.data = newState;
    localStorage.setItem("saved-state", JSON.stringify(this.getState()));

    console.log(`eliminaste un task, soy el state`, this.getState());
  },

  lastTask() {
    const cs = this.getState();
    const arrayLn = cs.tasks.length;
    const lastTask = cs.tasks[arrayLn - 1];
    return lastTask;
  },

  lastId() {
    const cs = this.getState();
    const arrayLn = cs.tasks.length;
    return arrayLn;
  },

  searchTask(id) {
    const cs = this.getState();
    const task = cs.tasks.filter((item) => item.id == id);
    return task;
  },
};

export { state };
