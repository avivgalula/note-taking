export const state = {
  notes: [],
};

const setLocalStorage = function () {
  localStorage.setItem("notes", JSON.stringify(state.notes));
};

const getCurrDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const addNote = function (content) {
  const newNote = {
    content,
    id: state.notes.length + 1,
    date: getCurrDate(),
  };

  state.notes = [newNote, ...state.notes];

  setLocalStorage();
};

export const deleteNote = function (id) {
  const newNotes = state.notes.filter((note) => note.id !== +id);
  state.notes = newNotes;
  setLocalStorage();
};

export const getNote = function (id) {
  return state.notes.find((note) => note.id === +id);
};

export const updateNote = function (id, content) {
  // 1) Delete note
  deleteNote(id);

  // 2) Add note
  addNote(content);

  setLocalStorage();
};

const init = function () {
  const storage = localStorage.getItem("notes");
  if (storage) state.notes = JSON.parse(storage);
};

init();
