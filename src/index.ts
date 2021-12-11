import { init as initHeader } from "../components/header";
import { init as initTitle } from "../components/title";
import { init as initPending } from "../components/pending-task";
import { init as initItem } from "../components/todo-item";

import { initPageA } from "../pages/page-a";
import { initRouter } from "./router";
import { state } from "./state";

(function () {
  initHeader();
  initTitle();
  initPending();
  initItem();

  state.init();

  let firstItem = {
    id: 0,
    task: "Resolver el desafio",
    checked: false,
  };

  state.addTask(firstItem);

  const pageA = initPageA();

  const root = document.querySelector(".root");

  initRouter(root, pageA);
})();
