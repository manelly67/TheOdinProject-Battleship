function deleteErrorMessages() {
  const errorMessages = document.querySelectorAll(".error");
  /* para crear un array desde el NodeList */
  const errorMessagesArray = [...errorMessages];
  const iterator = errorMessagesArray.entries();
  errorMessagesArray.forEach(() => {
    let index = iterator.next().value;
    let x = index[1]; /* para leer el node dentro del nodeList */
    x.parentNode.removeChild(x);
  });
}
export { deleteErrorMessages };
