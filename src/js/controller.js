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

const controlModal = function (id) {
  // 1) Get clicked note
  const note = model.getNote(id);

  // 2) Render modal
  modalView.render(note);

  // 3) Add handlers
  modalView.addHandlerClose();
  modalView.addHandlerUpdate(controlUpdate);
};

const controlUpdate = function (id, content) {
  // 1) Update modal state
  model.updateNote(id, content);

  // 2) Render notes
  notesView.render(model.state.notes);
};

const init = () => {
  notesView.render(model.state.notes);
  formView.addHandlerSubmit(controlForm);
  notesView.addHandlerDelete(controlDeleteNote);
  notesView.addHandlerOpen(controlModal);
  modalView.addHandlerDelete(controlDeleteNote);
};

init();
