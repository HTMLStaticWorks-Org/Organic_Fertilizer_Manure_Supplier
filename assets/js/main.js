const body = document.body,
  html = document.documentElement,
  theme = document.querySelector("[data-theme]"),
  menu = document.querySelector("[data-menu]"),
  mobile = document.querySelector("[data-mobile]"),
  rtlToggles = document.querySelectorAll("[data-rtl]");

// Dark mode initialization & toggle
if (localStorage.getItem("orgema-theme") === "dark") {
  body.classList.add("dark");
  html.classList.add("dark");
  if (theme) theme.textContent = "☀";
}

theme?.addEventListener("click", () => {
  body.classList.toggle("dark");
  html.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("orgema-theme", isDark ? "dark" : "light");
  theme.textContent = isDark ? "☀" : "◐";
});

// Mobile menu toggle
menu?.addEventListener("click", () => {
  mobile?.classList.toggle("open");
  menu.setAttribute(
    "aria-expanded",
    mobile?.classList.contains("open") ? "true" : "false",
  );
});

// RTL Direction Functionality
function setDirection(isRtl) {
  if (isRtl) {
    html.setAttribute("dir", "rtl");
    body.setAttribute("dir", "rtl");
    localStorage.setItem("orgema-dir", "rtl");
    rtlToggles.forEach((btn) => {
      btn.innerHTML = '⇄ <span class="rtl-text">LTR</span>';
      btn.setAttribute("aria-label", "Switch to Left-to-Right layout");
      btn.setAttribute("title", "Switch to LTR");
      btn.classList.add("active");
    });
  } else {
    html.removeAttribute("dir");
    body.removeAttribute("dir");
    localStorage.setItem("orgema-dir", "ltr");
    rtlToggles.forEach((btn) => {
      btn.innerHTML = '⇄ <span class="rtl-text">RTL</span>';
      btn.setAttribute("aria-label", "Switch to Right-to-Left layout");
      btn.setAttribute("title", "Switch to RTL");
      btn.classList.remove("active");
    });
  }
}

// Initial RTL setup from saved preference
if (localStorage.getItem("orgema-dir") === "rtl") {
  setDirection(true);
} else {
  setDirection(false);
}

// Event listeners for RTL toggles
rtlToggles.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const isRtl = html.getAttribute("dir") === "rtl";
    setDirection(!isRtl);
  });
});

// Demo forms handler
document.querySelectorAll("[data-demo]").forEach((form) =>
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const msg = form.querySelector(".form-message");
    if (msg) {
      msg.textContent =
        "Thank you. This is a front-end demo; connect an email or CRM service to receive submissions.";
    } else {
      alert("Thank you for your enquiry. We will get back to you shortly.");
    }
    form.reset();
  }),
);
