export function togglePopover(button) {
  button.classList.toggle("active");
  return true;
}

export function initializeButton() {
  const btn = document.querySelector("#button");
  btn.classList.remove("active");
  btn.addEventListener("click", () => togglePopover(btn));
}

document.addEventListener("DOMContentLoaded", initializeButton);
