class modalView {
  _parentElmenent = document.querySelector(".modal-container");
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElmenent.insertAdjacentHTML("afterbegin", markup);
    this._foucsModal();
  }

  _clear() {
    this._parentElmenent.innerHTML = "";
  }

  _foucsModal() {
    const textarea = this._parentElmenent.querySelector("textarea");
    textarea.focus();

    // Place the cursor at the end
    const length = textarea.value.length;
    textarea.setSelectionRange(length, length);
  }

  addHandlerClose() {
    // Close when click on close button
    this._parentElmenent.addEventListener("click", (e) => {
      const btn = e.target.closest(".note-modal-close-btn");
      if (!btn) return;
      this._clear();
    });

    // Close when press the "esc" key
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this._clear();
    });

    // Close when click outside the modal
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", (e) => {
      const overlayDimensions = overlay.getBoundingClientRect();
      if (
        e.clientX > overlayDimensions.left ||
        e.clientX < overlayDimensions.right ||
        e.clientY > overlayDimensions.top ||
        e.clientY < overlayDimensions.bottom
      ) {
        this._clear();
      }
    });
  }

  addHandlerDelete(handler) {
    this._parentElmenent.addEventListener("click", (e) => {
      const note = e.target.closest(".note-modal");
      const btn = e.target.closest(".note-modal-trash-btn");
      if (!btn) return;

      handler(note.dataset.id);
      this._clear();
    });
  }

  addHandlerUpdate(handler) {
    const textarea = this._parentElmenent.querySelector("textarea");
    textarea.addEventListener("input", () => {
      handler(this._data.id, textarea.value);
    });
  }

  _generateMarkup() {
    return `
        <div class="note-modal" data-id="${this._data.id}">
        <div class="note-modal-header">
        <span class="note-modal-data">${this._data.date}</span>
        <div class="note-modal-btns">
            <button class="note-modal-trash-btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="note-modal-trash-icon"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
            </button>
            <button class="note-modal-close-btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="note-modal-close-icon"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </button>
        </div>
        </div>

        <textarea
        class="note-modal-text"
        placeholder="What’s in your mind?"
        >${this._data.content}</textarea>
    </div>

    <div class="overlay"></div>
    `;
  }
}

export default new modalView();
