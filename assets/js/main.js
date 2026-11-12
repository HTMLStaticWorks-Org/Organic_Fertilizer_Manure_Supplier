const body = document.body,
  theme = document.querySelector("[data-theme]"),
  menu = document.querySelector("[data-menu]"),
  mobile = document.querySelector("[data-mobile]");
if (localStorage.getItem("orgema-theme") === "dark") body.classList.add("dark");
theme?.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "orgema-theme",
    body.classList.contains("dark") ? "dark" : "light",
  );
  theme.textContent = body.classList.contains("dark") ? "☀" : "◐";
});
menu?.addEventListener("click", () => {
  mobile?.classList.toggle("open");
  menu.setAttribute(
    "aria-expanded",
    mobile?.classList.contains("open") ? "true" : "false",
  );
});
document.querySelectorAll("[data-demo]").forEach((form) =>
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const msg = form.querySelector(".form-message");
    if (msg)
      msg.textContent =
        "Thank you. This is a front-end demo; connect an email or CRM service to receive submissions.";
    form.reset();
  }),
);
