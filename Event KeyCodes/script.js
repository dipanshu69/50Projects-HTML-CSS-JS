const keys = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  keys.innerHTML = `
    <div class="key" id="key">
    ${e.key === " " ? "Space" : e.key}
    <small>event.key</small>
  </div>
  <div class="key" id="keyCode">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key" id="code">
    ${e.code}
    <small>event.code</small>
  </div>`;
});
