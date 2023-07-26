class formView {
  _parentElmenent = document.querySelector(".add-note-form");

  getContent() {
    const content = this._parentElmenent
      .querySelector(".add-note-form-text")
      .value.trim();
    this._clearForm();
    return content;
  }

  _clearForm() {
    this._parentElmenent.querySelector(".add-note-form-text").value = "";
  }

  addHandlerSubmit(handler) {
    this._parentElmenent.addEventListener("click", (e) => {
      const btn = e.target.closest(".add-note-form-btn");
      if (!btn) return;
      handler();
    });

    this._parentElmenent.addEventListener("keydown", (e) => {
      if (!e.shiftKey && e.key === "Enter") {
        e.preventDefault();
        handler();
      }
    });
  }
}

export default new formView();
