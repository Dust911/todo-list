var modalWindow = document.querySelector(".modalBackground");
var getModalBtn = document.querySelector("#header__button");
var closeModalBtn = document.querySelector(".btn__cancel");
var closeModalCross = document.querySelector(".btn__modal_close");

const createNoteBtn = document.querySelector(".btn__save");
const notesTable = document.querySelector(".notesTable");

const titleInput = document.querySelector(".input__task");
const descInput = document.querySelector(".content__task");

getModalBtn.onclick = function() {
  modalWindow.style.display = "block";
}

closeModalBtn.onclick = function() {
  modalWindow.style.display = "none";
}

closeModalCross.onclick = function() {
  modalWindow.style.display = "none";
}

createNoteBtn.onclick = function() {
  modalWindow.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}

const createElement = (tag, className, innerTxt) => {
  const element = document.createElement(tag);
  if(!tag) {
    alert("Нету");
    return;
  }
  if(className) {
    element.className = className;
  }
  
  if(innerTxt) {
    element.innerText = innerTxt;
  }
  return element;
}

const prependElement = () => {
  const newNote = createElement("li", "noteUnit");
  const noteTitle = createElement("div", "noteTitle", titleInput.value);
  const noteText = createElement("div", "noteDesc", descInput.value);
  newNote.append(noteTitle, noteText);
  notesTable.prepend(newNote);

  // Очищает поля ввода
  titleInput.value = ''; 
  descInput.value = '';
}
createNoteBtn.addEventListener("click", prependElement);