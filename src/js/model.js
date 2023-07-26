export const state = {
  notes: [],
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

  console.log(newNote);

  state.notes = [newNote, ...state.notes];
};

export const deleteNote = function (id) {
  const newNotes = state.notes.filter((note) => note.id !== +id);
  state.notes = newNotes;
};
