function _createModal(options) {
  const DEFAULT_WIDTH = "600px";
  const modal = document.createElement("div");
  modal.classList.add("vmodal");

  modal.innerHTML = `
  <div class="modal-overlay" onClick="modal.close()">
  <div class="modal-window" id="modal-window" style="width: ${
    options.width || DEFAULT_WIDTH
  }" onClick="(()=>event.stopPropagation())()">
    <div class="modal-header">
      <span class="modal-title">${options.title || "Окно"}</span>
      ${
        options.closable
          ? `<span onClick="modal.close()" class="modal-close">&times;</span>`
          : ""
      }
    </div>
    <div class="modal-body">
    ${options.content || ""}
    </div>
    <div class="modal-footer">
      <button onClick="modal.close()">Ok</button>
      <button onClick="modal.close()">Cancel</button>
    </div>
  </div>
</div>

`;

  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;

  return {
    open: function () {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {
      $modal.parentNode.removeChild($modal);
    },
  };
};
