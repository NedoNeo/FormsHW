import { togglePopover, initializeButton } from "../app";

describe("togglePopover function", () => {
  let button;

  beforeEach(() => {
    document.body.innerHTML = `<button id="button" class=""></button>`;
    button = document.querySelector("#button");

    initializeButton();
  });

  test("should toggle the 'active' class on the button", () => {
    expect(button.classList.contains("active")).toBe(false);

    togglePopover(button);
    expect(button.classList.contains("active")).toBe(true);

    togglePopover(button);
    expect(button.classList.contains("active")).toBe(false);
  });

  test("should return true when toggled", () => {
    expect(togglePopover(button)).toBe(true);
  });

  test("should remove 'active' class on DOMContentLoaded", () => {
    expect(button.classList.contains("active")).toBe(false);
  });

  test("should toggle class when button is clicked", () => {
    button.click();
    expect(button.classList.contains("active")).toBe(true);

    button.click();
    expect(button.classList.contains("active")).toBe(false);
  });
});
