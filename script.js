var modalWindow = document.querySelector(".modalBackground");
var getModalBtn = document.querySelector("#header__button");
var closeModalBtn = document.querySelector(".btn__cancel");
var closeModalCross = document.querySelector(".btn__modal_close");

const createNoteBtn = document.querySelector(".btn__save");
const notesTable = document.querySelector(".notesTable");

const titleInput = document.querySelector(".input__task");
const descInput = document.querySelector(".content__task");

let exitConfirm = ("Вы точно хотите закрыть окно написания?");

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

// функция проверяет инпуты на наличие текста, и если есть - выдаёт алерт с подтверждением при закрытии модалки
window.onclick = function(event) {
  if (event.target == modalWindow & descInput.value == '') {
    modalWindow.style.display = "none";
    console.log("working clean");
    descInput.value = '';
    titleInput.value = '';
  } else if (event.target == modalWindow & !descInput.value == '') {
    confirm(exitConfirm);
    console.log("description was empty");
    modalWindow.style.display = "none";
    descInput.value = '';
    titleInput.value = '';
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

  if(titleInput.value === '') {
    alert("Вы не ввели заголовок!");
    modalWindow.style.display = "block";
    return;
}

  newNote.append(noteTitle, noteText);
  notesTable.prepend(newNote);

  // Очищает поля ввода
  titleInput.value = ''; 
  descInput.value = '';
}
createNoteBtn.addEventListener("click", prependElement);