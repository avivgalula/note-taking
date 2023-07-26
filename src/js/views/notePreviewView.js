class notePreviewView {
  _parentElmenent = document.querySelector(".notes-container");

  addHandlerDelete(handler) {
    // console.log(this._parentElmenent);
    // if (!this._parentElmenent) return;
    this._parentElmenent.addEventListener("click", (e) => {
      const note = e.target.closest(".note-preview");
      const btn = e.target.closest(".note-preview-trash-btn");
      if (!btn) return;
      handler(note.dataset.id);
    });
  }
}

export default new notePreviewView();
