import * as model from "./model.js";
import formView from "./views/formView.js";
import notesView from "./views/notesView.js";
import modalView from "./views/modalView.js";

const controlForm = function () {
  // 1) Get note content from formView
  const content = formView.getContent();
  if (!content) return;

  // 2) Update notes state
  model.addNote(content);

  // 3) Render notes
  notesView.render(model.state.notes);
};

const controlDeleteNote = function (id) {
  // 1) Delete note from the state
  model.deleteNote(id);

  // 2) Render notes
  notesView.render(model.state.notes);
};

const controlOpenModal = function (id) {
  // 1) Get clicked note
  const note = model.getNote(id);

  // 2) Render modal
  modalView.render(note);

  // 3) Add handlers
  modalView.addHandlerClose();
};

const init = () => {
  formView.addHandlerSubmit(controlForm);
  notesView.addHandlerDelete(controlDeleteNote);
  notesView.addHandlerOpen(controlOpenModal);
  modalView.addHandlerDelete(controlDeleteNote);
};

init();
