function createContainers(arg1) {
  /* the arg1 is the parent container   */

  const container = document.createElement("div");

  container.classList.add("gridForAdd");
  container.setAttribute("id", "gridForAdd");

  arg1.appendChild(container);
}

export { createContainers };
