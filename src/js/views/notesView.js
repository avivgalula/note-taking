class notesView {
  _parentElmenent = document.querySelector(".notes-container");
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElmenent.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElmenent.innerHTML = "";
  }

  addHandlerDelete(handler) {
    this._parentElmenent.addEventListener("click", (e) => {
      const note = e.target.closest(".note-preview");
      const btn = e.target.closest(".note-preview-trash-btn");
      if (!btn) return;
      handler(note.dataset.id);
    });
  }

  addHandlerOpen(handler) {
    this._parentElmenent.addEventListener("click", (e) => {
      const note = e.target.closest(".note-preview");
      const btn = e.target.closest(".note-preview-trash-btn");
      if (!note) return;
      if (btn) return;
      handler(note.dataset.id);
    });
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupNote).join("");
  }

  _generateMarkupNote(note) {
    return `
        <div class="note-preview" data-id="${note.id}">
          <div class="note-crown"></div>

          <div class="note-preview-header">
            <span class="note-preview-data">${note.date}</span>
            <button class="note-preview-trash-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="note-preview-trash-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>

          <div class="note-preview-content">
            ${note.content.replace(/\n/g, "<br>")}
          </div>
        </div>
    `;
  }
}

export default new notesView();
