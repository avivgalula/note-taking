import * as model from "./model.js";
import formView from "./views/formView.js";
import notesView from "./views/notesView.js";
import notePreviewView from "./views/notePreviewView.js";

const controlForm = function () {
  // 1) Get note content from formView
  const content = formView.getContent();
  if (!content) return;

  // 2) Update notes state
  model.addNote(content);

  // 3) Render notes
  notesView.render(model.state.notes);
};

const controlNoteDelete = function (id) {
  // 1) Delete note from the state
  model.deleteNote(id);

  // 2) Render notes
  notesView.render(model.state.notes);
};

const init = () => {
  formView.addHandlerSubmit(controlForm);
  notePreviewView.addHandlerDelete(controlNoteDelete);
};

init();
